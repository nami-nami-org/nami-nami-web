import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { meSessionToken } from './core/services/users.service'

const PUBLIC_PATHS = new Set([
  '/', 
  '/login', 
  '/register', 
  '/dishes', 
  '/local',              // ✅ AGREGADO - Lista de locales
  '/shopping-cart', 
  '/payment-cart',
  '/confirmation-cart'
])

const ID_PATH_REGEX = new RegExp(`^/(?:dishes|restaurants|local)/\\d+$`) // ✅ AGREGADO 'local'

const STATIC_FILE_REGEX = /\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|ttf|eot|map)$/

function shouldSkipAuth(pathname: string): boolean {
  return (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/assets') ||
    pathname === '/favicon.ico' ||
    STATIC_FILE_REGEX.test(pathname)
  )
}

function isPublicPath(path: string): boolean {
  if (shouldSkipAuth(path)) return true
  if (PUBLIC_PATHS.has(path)) return true
  if (ID_PATH_REGEX.test(path)) return true
  return false
}

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('Nami_Auth_Session')?.value
  console.log('token', token)
  const path = req.nextUrl.pathname
  const isPublic = isPublicPath(path)
  const isAuthPath = path === '/login' || path === '/register'
  const url = req.nextUrl.clone()

  // No hay token y no es una ruta pública
  if (!token && !isPublic) {
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // Hay token y está en /login o /register
  if (token && isAuthPath) {
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  // Hay token, valida su estado
  if (token && !isPublic) {
    const session = await meSessionToken(token)
    // Si el token no es válido y no está en una ruta de autenticación
    if (session?.status !== 200 && !isAuthPath) {
      console.log('Token inválido/expirado')
      url.pathname = '/login'
      const response = NextResponse.redirect(url)
      response.cookies.delete({
        name: 'Nami_Auth_Session',
        path: '/'
      })
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|static|assets|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|ttf|eot|map)$).*)'
  ]
}
export const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV

export const IS_DEV = APP_ENV === 'development'

export const API_URL = IS_DEV ? 'http://localhost:8080' : process.env.NEXT_PUBLIC_API_URL

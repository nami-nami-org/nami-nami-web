export const NODE_ENV = process.env.NODE_ENV
export const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV

export const IS_DEV = (APP_ENV || NODE_ENV) === 'development'

export const API_URL = IS_DEV ? 'http://localhost:8080' : process.env.NEXT_PUBLIC_AUTH_URL

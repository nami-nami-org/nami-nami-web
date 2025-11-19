export const APP_ENV = process.env.APP_ENV

export const IS_DEV = APP_ENV === 'development'

export const API_URL = IS_DEV ? 'http://localhost:8080' : 'http://18.222.199.91:8080'

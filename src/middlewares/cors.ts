import config from 'config'

type Options = {
  originStrict?: boolean
}
export default class Cors {
  public static getOptions({ originStrict = false }: Options = {}) {
    const isProduction = process.env.NODE_ENV === 'production'
    const whitelist = config.get<string>('cors.origin').split(',')
    const corsOptions = {
      origin: (origin, callback) => {
        let isAllowed = whitelist.includes('*')
          || whitelist.includes(origin)
          || !isProduction
        if (!originStrict) {
          isAllowed = isAllowed || !origin
        }
        if (isAllowed) {
          callback(null, true)
        } else {
          callback('Domain not allowed by CORS')
        }
      },
      exposedHeaders: 'x-auth-token',
    }
    return corsOptions
  }
}

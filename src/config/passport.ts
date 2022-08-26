import passport from 'passport'
import JwtStrategy, { ExtractJwt } from 'passport-jwt'

import { JWT_SECRET } from '../util/secrets'

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user: any, done) {
  done(null, user)
})

export const jwtStrategy = new JwtStrategy.Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: `${JWT_SECRET}`,
  },
  (jwtPayload, done) => {
    const user = jwtPayload
    done(null, user)
  }
)

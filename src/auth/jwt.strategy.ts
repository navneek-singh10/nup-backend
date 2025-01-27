import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.AUTH0_SECRET || 'your-secret-key',
    });
  }

  async validate(payload: any) {
    // Attach user info to request (e.g., user ID, email)
    return { userId: payload.sub, email: payload.email };
  }
}

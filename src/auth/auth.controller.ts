import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() user: any) {
    const mockUser = { id: '123', email: user.email };
    return this.authService.login(mockUser);
  }
}

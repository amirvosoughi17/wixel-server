import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  private adminUsername: string = process.env.ADMIN_USERNAME;
  private adminPassword: string = process.env.ADMIN_PASSWORD;
  private validToken: string = process.env.VALID_TOKEN;

  async validateAdmin(credentials: {
    username: string;
    password: string;
  }): Promise<boolean> {
    const { username, password } = credentials;
    return username === this.adminUsername && password === this.adminPassword;
  }

  generateToken(): string {
    return this.validToken;
  }

  isAdminUser(token: string): boolean {
    return token === this.validToken;
  }
}

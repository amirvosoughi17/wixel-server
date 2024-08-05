import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: 'USER',
      },
    });
  }

  async findUserByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
  async findUserById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }
}

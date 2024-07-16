import { IsNotEmpty } from 'class-validator';

export class AdminLoginDto {
  @IsNotEmpty({ message: 'نام کاربری خود را وارد کنید' })
  username: string;

  @IsNotEmpty({ message: 'رمز عبور خود را وارد کنید' })
  password: string;
}

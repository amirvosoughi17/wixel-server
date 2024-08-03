import {
  IsEnum,
  IsArray,
  ArrayNotEmpty,
  IsUrl,
  IsNotEmpty,
  Matches,
} from 'class-validator';

enum WebsiteType {
  ecommerce = 'ecommerce',
  learning = 'learning',
  company = 'company',
  personal = 'personal',
  startup = 'startup',
}

enum UsersCount {
  TEN = 'TEN',
  FIFTY = 'FIFTY',
  FIVE_HUNDRED = 'FIVE_HUNDRED',
  ONE_THOUSAND = 'ONE_THOUSAND',
}

export class CreateOrderDto {
  @IsNotEmpty({ message: 'نام کاربری خود را وارد کنید' })
  name: string;

  @IsNotEmpty({ message: 'شماره تماس خود را وارد کنید' })
  @Matches(/^(\+98|0)?9\d{9}$/, {
    message: 'لطفا شماره تماس معبتر وارد کنید !!',
  })
  phoneNumber: string;

  @IsNotEmpty({ message: 'نام شرکت یا گروه خود را وارد کنید' })
  companyName: string;

  @IsNotEmpty({ message: 'توضیحات خود را وارد کنید' })
  description: string;

  @IsEnum(WebsiteType, { message: 'نوع وبسایت معتبر نیست' })
  typeOfWeb: WebsiteType;

  @IsEnum(UsersCount, { message: 'تعداد کاربران ماهانه معتبر نیست' })
  monthlyUsersCount: UsersCount;

  @IsArray()
  @ArrayNotEmpty()
  @IsUrl({}, { each: true, message: 'لطفا یک URL معتبر وارد کنید' })
  likedWebsiteUrls: string[];
}
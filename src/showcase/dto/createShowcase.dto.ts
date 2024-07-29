import { IsString, IsArray, IsUrl, IsNotEmpty } from 'class-validator';

export class CreateShowcaseDto {
  @IsNotEmpty({
    message: 'لطفا عنوان نمونه کاررا وارد کنید',
  })
  title: string;

  @IsNotEmpty({
    message: 'لطفا توضیحات را وارد کنید',
  })
  description: string;

  @IsArray()
  teches: string[];

  @IsString()
  image: string;

  @IsString()
  category: string;

  @IsUrl()
  instagramHref: string;

  @IsUrl()
  webHref: string;
}

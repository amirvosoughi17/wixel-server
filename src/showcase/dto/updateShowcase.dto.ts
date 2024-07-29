import { IsOptional, IsString, IsArray, IsUrl, IsNotEmpty } from 'class-validator';

export class UpdateShowcaseDto {
  @IsOptional()
  @IsString()
  readonly title?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsArray()
  readonly teches?: string[];

  @IsOptional()
  @IsString()
  readonly image?: string;

  @IsOptional()
  @IsString()
  readonly category?: string;

  @IsOptional()
  @IsUrl()
  readonly instagramHref?: string;

  @IsOptional()
  @IsUrl()
  readonly webHref?: string;
}

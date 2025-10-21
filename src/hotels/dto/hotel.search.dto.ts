import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class SearchHotelDto {
  @IsString()
  destination: string;

  @IsOptional()
  @IsBoolean()
  lateCheckIn?: boolean;
}

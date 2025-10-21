import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateHotelDto {
  @IsString()
  name: string;

  @IsNumber()
  rating: number;

  @IsString()
  pricePerNight: string;

  @IsString()
  destination: string;

  @IsOptional()
  @IsBoolean()
  lateCheckInAvailable?: boolean;

  @IsOptional()
  @IsString()
  lateCheckInTime?: string;
}

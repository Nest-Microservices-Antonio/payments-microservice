import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsNumber, IsPositive, IsString, ValidateNested } from 'class-validator';


export class PaymentSessionDto {

  @IsString()
  orderId: string; //orderId proveniente de oders-ms

  @IsString()
  currency: string;

  @IsArray()
  @ArrayMinSize(1) //Tiene que venir al menos un producto
  @ValidateNested({ each: true }) // se tienen que validar todos los campos de PaymentSessionItemDto
  @Type(() => PaymentSessionItemDto)
  items: PaymentSessionItemDto[];

}

export class PaymentSessionItemDto {

  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  quantity: number;

}

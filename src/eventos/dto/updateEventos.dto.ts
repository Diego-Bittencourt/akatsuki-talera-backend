import { IsNotEmpty, IsString, IsNumber, ValidateIf, IsEnum, IsOptional } from "class-validator"
import { eventoType } from "../../types/eventoType"

export class UpdateEventosDto {

    @IsNotEmpty()
    @IsNumber()
    eventoId: number

    @IsOptional()
    @IsString()
    eventoName: string

    @IsOptional()
    @IsEnum(eventoType)
    type: string

    @IsOptional()
    @IsString()
    eventoSection: string

    @IsOptional()
    @IsNumber()
    timeToFinnish: number 
    //minutes

    @IsOptional()
    @IsString()
    spoilerLink: string
}
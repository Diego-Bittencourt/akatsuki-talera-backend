import { IsEnum, IsOptional, IsString } from "class-validator";
import { highscoreCategories, highscoreVocacao } from "../../types/highscoreCriteria";

export class HighscoreDto {

    @IsString()
    @IsOptional()
    world: string

    @IsEnum(highscoreCategories)
    @IsOptional()
    category: string

    @IsEnum(highscoreVocacao)
    @IsOptional()
    vocacao: string

    @IsString()
    @IsOptional()
    guild: string
}
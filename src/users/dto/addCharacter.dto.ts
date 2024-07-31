import { IsString } from 'class-validator';

export class AddCharacterDto {
  @IsString()
  characterName: string;
}

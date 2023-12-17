import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Evento } from "./entity/evento.entity";

 @Injectable()
 export class QuestRepository extends Repository<Evento> {

 }
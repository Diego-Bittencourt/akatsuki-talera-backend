import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Quest } from "./entity/quest.entity";

 @Injectable()
 export class QuestRepository extends Repository<Quest> {

 }
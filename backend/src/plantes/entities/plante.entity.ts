import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Plante {
  
    @Prop()
    plante: string;

    @Prop()
    nombre: string;

    @Prop()
    heure: string;

    @Prop({ default: false})
    etat: boolean;
}


export type PlanteDocument = Plante & Document;
export const PlanteSchema = SchemaFactory.createForClass(Plante)
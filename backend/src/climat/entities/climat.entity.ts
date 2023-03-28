import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Climat {
    @Prop()
    temperature: number;

    @Prop()
    humidity: number;

    @Prop()
    luminosity: number;
}

export type ClimatDocument = Climat & Document;
export const ClimatSchema = SchemaFactory.createForClass(Climat);
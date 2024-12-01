import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export class Emails {
  googleMap: string;
  info: string;
}
export type profileInfo = HydratedDocument<Profile>;

@Schema({ versionKey: false })
export class Profile {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  email: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  availableToWork: boolean;

  @Prop()
  years: number;

  @Prop()
  projects: number;

  @Prop()
  works: number;

  @Prop([String])
  skills: string[];

  @Prop()
  map: Emails;

  @Prop()
  lan: string;
}

export const profileSchema = SchemaFactory.createForClass(Profile);

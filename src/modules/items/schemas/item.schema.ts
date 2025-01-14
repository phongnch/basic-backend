import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Item extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);

// Schema định nghĩa cấu trúc dữ liệu cho item, thao tác với MongoDB

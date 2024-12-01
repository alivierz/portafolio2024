import { Module } from '@nestjs/common';
import { DetailsController } from './details.controller';
import { DetailsService } from './details.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Profile, profileSchema } from 'src/config/schemas/profile.schema';

@Module({
  controllers: [DetailsController],
  providers: [DetailsService],
  imports: [
    MongooseModule.forFeature([{ name: Profile.name, schema: profileSchema }]),
  ],
})
export class DetailsModule {}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from 'src/config/schemas/profile.schema';

@Injectable()
export class DetailsService {
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async getProfileService(language: string) {
    return await this.profileModel.findOne(
      {
        lan: language,
      },
      {
        _id: 0,
        name: 1,
        description: 1,
        email: 1,
        phoneNumber: 1,
        availableToWork: 1,
        years: 1,
        projects: 1,
        works: 1,
        map: 1,
        skills: 1,
      },
    );
  }
}

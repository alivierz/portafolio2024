import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from 'src/config/schemas/profile.schema';
import { DetailsDto } from 'src/dto/details.dto';
import { ProfileEntity } from 'src/entity/details.entity';

@Injectable()
export class DetailsService {
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async getProfileService(data: DetailsDto) {
    try {
      return await this.profileModel
        .findOne(
          {
            lan: data.language,
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
        )
        .catch((_err) => {
          throw new HttpException(
            {
              type: 'db',
              typeDb: 'mongo',
              trackingCode: 'PCDSE001',
              data: _err.errorResponse,
            },
            HttpStatus.NOT_ACCEPTABLE,
          );
        });
    } catch (error) {
      throw error;
    }
  }
}

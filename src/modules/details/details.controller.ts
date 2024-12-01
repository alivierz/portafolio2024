import { Controller, Get, Query } from '@nestjs/common';
import { DetailsService } from './details.service';
import { DetailsDto } from 'src/dto/details.dto';

@Controller('details/v1')
export class DetailsController {
  constructor(private detailsService: DetailsService) {}

  @Get('/profile')
  async GetProfileDateData(@Query() { language, description }: DetailsDto) {
    return await this.detailsService.getProfileService(language);
  }
}

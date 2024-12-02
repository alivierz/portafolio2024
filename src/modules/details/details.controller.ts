import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
  UseFilters,
} from '@nestjs/common';
import { DetailsService } from './details.service';
import { DetailsDto } from 'src/dto/details.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { ProfileEntity } from 'src/entity/details.entity';
import { AllExeptionFilter } from 'src/core/errors';

@Controller('details/v1')
export class DetailsController {
  constructor(private detailsService: DetailsService) {}

  @Get('/profile')
  //? esto solo lo usamos para documentar
  @ApiOkResponse({ type: ProfileEntity })
  @UseFilters(AllExeptionFilter)
  GetProfileDateData(@Query() data: DetailsDto) {
    try {
      return this.detailsService.getProfileService(data).catch((_err) => {
        throw new HttpException(
          {
            trackingCode: 'PCCE001',
            errorData: _err.response,
          },
          _err.status,
        );
      });
    } catch (error) {
      throw error;
    }
  }
}

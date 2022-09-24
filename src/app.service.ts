import { HttpStatus, Inject, Injectable } from '@nestjs/common';

import { PrismaService } from 'database/prisma.service';
import { BusinessZone } from './business-entity.ts/business.zone.entity';
import { RsCreateZonesDto } from './dto';
import { RsGetZoneDto } from './dto/rs-get-zone.dto';
import { RsGetZonesDto } from './dto/rs-get-zones.dto';
import { IRqRsFactory, RQ_RS_FACTORY_SERVICE } from './interfaces';

/* --------------------------------------------- */

@Injectable()
export class AppService {
  /* -------------- */

  constructor(
    private prisma: PrismaService,

    @Inject(RQ_RS_FACTORY_SERVICE)
    private readonly rqRsFactoryService: IRqRsFactory,
  ) {}

  /* -------------- */

  async createZone(data: BusinessZone) {
    let rsCreateZonesDto: RsCreateZonesDto;

    try {
      const newClient = await this.prisma.zones.create({ data });
      if (newClient) {
        rsCreateZonesDto =
          this.rqRsFactoryService.ZoneEntitytoCreateDTOResponse(
            HttpStatus.OK,
            '',
            newClient,
          );
      } else {
        rsCreateZonesDto =
          this.rqRsFactoryService.ZoneEntitytoCreateDTOResponse(
            HttpStatus.INTERNAL_SERVER_ERROR,
            'Failed to create zone',
            null,
          );
      }
    } catch (e) {
      rsCreateZonesDto = this.rqRsFactoryService.ZoneEntitytoCreateDTOResponse(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Failed to create zone',
        null,
      );
    }
    console.log('[ms-create-zones][service] - create(', rsCreateZonesDto, ')');

    return rsCreateZonesDto;
  }

  /* -------------- */

  async findAll() {
    let rsGetZonesDto: RsGetZonesDto;

    try {
      const res = await this.prisma.zones.findMany();
      if (res && res.length) {
        rsGetZonesDto =
          this.rqRsFactoryService.ZoneEntitiestoGetZonesDTOResponse(
            HttpStatus.OK,
            '',
            res,
          );
      } else {
        rsGetZonesDto =
          this.rqRsFactoryService.ZoneEntitiestoGetZonesDTOResponse(
            HttpStatus.NOT_FOUND,
            'Failed to get zones',
            null,
          );
      }
    } catch (e) {
      rsGetZonesDto = this.rqRsFactoryService.ZoneEntitiestoGetZonesDTOResponse(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Failed to get zone',
        null,
      );
    }
    console.log('[ms-get-zones][service] - get(', rsGetZonesDto, ')');
    return rsGetZonesDto;
  }

  /* -------------- */

  async findOne(id: number) {
    let rsGetZoneDto: RsGetZoneDto;

    try {
      const zone = await this.prisma.zones.findUnique({
        where: {
          id: id,
        },
      });
      if (zone) {
        rsGetZoneDto = this.rqRsFactoryService.ZoneEntitytoGetZoneDTOResponse(
          HttpStatus.OK,
          '',
          zone,
        );
      } else {
        rsGetZoneDto = this.rqRsFactoryService.ZoneEntitytoGetZoneDTOResponse(
          HttpStatus.NOT_FOUND,
          'Zone inexistent',
          null,
        );
      }
    } catch (e) {
      rsGetZoneDto = this.rqRsFactoryService.ZoneEntitytoGetZoneDTOResponse(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Failed to get zone',
        null,
      );
    }
    console.log('[ms-get-zone-by-id][service] - get(', rsGetZoneDto, ')');
    return rsGetZoneDto;
  }

  /* --------------------------------------------- */
}

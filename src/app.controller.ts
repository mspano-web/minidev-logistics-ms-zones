import { Controller, Inject } from '@nestjs/common';
import {
  EventPattern,
  MessagePattern,
} from '@nestjs/microservices';

import { AppService } from './app.service';
import { BusinessZone } from './business-entity.ts/business.zone.entity';
import { RqCreateZonesDto, RqGetZoneDto, } from './dto';
import { IRqRsFactory, RQ_RS_FACTORY_SERVICE } from './interfaces';

/* ----------------------------------------- */

@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService,

    @Inject(RQ_RS_FACTORY_SERVICE)
    private readonly rqRsFactoryService: IRqRsFactory,

  ) {}

  /* ------------------ */

  @MessagePattern({ cmd: 'ms-get-zones' })
  async findAll() {
    return await this.appService.findAll();
  }

  /* ------------------ */

  @EventPattern({ cmd: 'ms-create-zones' })
  async createZone(rqCreateZonesDto: RqCreateZonesDto) {
    const zoneBusinessData: BusinessZone =
    this.rqRsFactoryService.DTORequestToZoneEntity(rqCreateZonesDto);
    return await this.appService.createZone(zoneBusinessData);
  }

  /* ------------------ */

  @MessagePattern({ cmd: 'ms-get-zone-by-id' })
  async getZone(rqGetZoneDto: RqGetZoneDto) {
      const { id } = rqGetZoneDto;
      return await this.appService.findOne(id);
  }
}

/* ----------------------------------------- */

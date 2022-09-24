import { Zones } from '@prisma/client';
import { BusinessZone } from 'src/business-entity.ts/business.zone.entity';
import {
  RqCreateZonesDto,
  RsCreateZonesDto,
  RsGetZoneDto,
  RsGetZonesDto,
} from 'src/dto';

//   interface and provide that token when injecting to an interface type.
export const RQ_RS_FACTORY_SERVICE = 'RQ_RS_FACTORY_SERVICE';

/* --------------------------------------------------------- */

export interface IRqRsFactory {
  DTORequestToZoneEntity(rqCreateZonesDto: RqCreateZonesDto): BusinessZone;

  /* --------------- */

  ZoneEntitytoCreateDTOResponse(
    statusCode: number,
    message: string,
    zone: Zones,
  ): RsCreateZonesDto;

  /* --------------- */

  ZoneEntitytoGetZoneDTOResponse(
    statusCode: number,
    message: string,
    zone: Zones,
  ): RsGetZoneDto;

  /* --------------- */

  ZoneEntitiestoGetZonesDTOResponse(
    statusCode: number,
    message: string,
    zones: Zones[],
  ): RsGetZonesDto;
}

/* --------------------------------------------------------- */

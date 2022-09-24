
/* ------------------------------------------------------- */

import { Injectable } from "@nestjs/common";

import { Zones } from "@prisma/client";

import { BusinessZone } from "src/business-entity.ts/business.zone.entity";
import { RqCreateZonesDto, RsCreateZonesDto } from "src/dto";
import { RsGetZoneDto } from "src/dto/rs-get-zone.dto";
import { RsGetZonesDto } from "src/dto/rs-get-zones.dto";
import { IRqRsFactory } from "src/interfaces";

/* ----------------------------------------------- */

@Injectable()
export class RqRsFactoryService implements IRqRsFactory {

  DTORequestToZoneEntity(
    rqCreateZonesDto: RqCreateZonesDto,
  ): BusinessZone {
    const bz = new BusinessZone();
    bz.description = rqCreateZonesDto.description;
    return bz;
  }

  /* -------------------------- */

  ZoneEntitytoCreateDTOResponse(
    statusCode: number,
    message: string,
    zone: Zones,
  ): RsCreateZonesDto {
    return new RsCreateZonesDto(
      { statusCode, message }, // header
      zone // Check if user information is available
        ? { // add data
            id: zone.id,
          }
        : null, // without data
    );
  }

  /* -------------------------- */

  ZoneEntitytoGetZoneDTOResponse(
    statusCode: number,
    message: string,
    zone: Zones,
  ): RsGetZoneDto {
    return new RsGetZoneDto(
      { statusCode, message }, // header
      zone // Check if user information is available
        ? {
            // add data
            description: zone.description,
          }
        : null, // without data
    );
  }

  /* -------------------------- */

  ZoneEntitiestoGetZonesDTOResponse(
    statusCode: number,
    message: string,
    zones: Zones[],
  ): RsGetZonesDto {
    console.log("ZONES:", zones)
    return new RsGetZonesDto(
      { statusCode, message }, // header 
      zones
    );
  }

}

/* ------------------------------------------------------- */

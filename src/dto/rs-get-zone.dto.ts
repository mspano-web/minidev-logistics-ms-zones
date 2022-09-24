import { RsGenericHeaderDto } from './rs-generic-header.dto';

/* ----------------------------------------- */

export class RsGetZoneDataDto {
  description: string;
}

/* ----------------------------------- */

export class RsGetZoneDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsGetZoneDataDto: RsGetZoneDataDto;

  constructor(
    rsGenericHeaderDto: RsGenericHeaderDto,
    rsGetZoneDataDto: RsGetZoneDataDto,
  ) {
    this.rsGenericHeaderDto = rsGenericHeaderDto;
    this.rsGetZoneDataDto = rsGetZoneDataDto;
  }
}

/* ----------------------------------- */

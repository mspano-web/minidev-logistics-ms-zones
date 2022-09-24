import { RsGenericHeaderDto } from "./rs-generic-header.dto";

/* ----------------------------------------- */

export class RsCreateZonesDataDto {
    id: number;
  }
  
  /* ----------------------------------- */
  
  export class RsCreateZonesDto {
    rsGenericHeaderDto: RsGenericHeaderDto;
    rsCreateZonesDataDto: RsCreateZonesDataDto;

    constructor(
      rsGenericHeaderDto: RsGenericHeaderDto,
      rsCreateZonesDataDto: RsCreateZonesDataDto,
    ) {
      this.rsGenericHeaderDto = rsGenericHeaderDto;
      this.rsCreateZonesDataDto = rsCreateZonesDataDto;
    }
  }
  
  /* ----------------------------------- */
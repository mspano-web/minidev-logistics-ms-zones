import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

/* ----------------------------------------- */

@Exclude()
export class RqGetZoneDto {
    @Expose()
    @IsNotEmpty()
    @IsNumber()
    id: number;
}

/* ----------------------------------------- */

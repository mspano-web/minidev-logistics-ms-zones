import {  IsString } from "class-validator";

/* ----------------------------------------- */

export class RqCreateZonesDto {
    @IsString()
    description: string;
}

/* ----------------------------------------- */

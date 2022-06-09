import { type } from "os";
import { GearSlotID } from "../features/gear/gearSlice";
import { BrandSetBonuses } from "./BrandsetBonuses";
import { GearTalents } from "./GearTalents";
import { IGearAttribute, ICoreAttribute } from "./Stats";

export interface Gear {
    id: string | null
    brand: keyof typeof BrandSetBonuses | null;
    coreAttribute: [coreId: ICoreAttribute | null, coreValue: number | null]
    coreAttribute2?: [coreId: ICoreAttribute | null, coreValue: number | null]
    coreAttribute3?: [coreId: ICoreAttribute | null, coreValue: number | null]
    minorAttribute: [attributeId: IGearAttribute | null, attributeValue: number | null]
    minorAttribute2?: [attributeId: IGearAttribute | null, attributeValue: number | null]
    minorAttribute3?: [attributeId: IGearAttribute | null, attributeValue: number | null]
    mod?: [modId: string | null, attributeValue: number | null]
    mod2?: [modId: string | null, attributeValue: number | null]
    mod3?: [modId: string | null, attributeValue: number | null]
    talent?: [talentId: string | null]
}

export type IBrandSetBonuses = {
    [key: string]: Array<Array<[attribute?: IGearAttribute | keyof typeof GearTalents, value?: number | null]>>
}

export type IGearTalents = {
    [key: string]: {
        slot: Array<string>; // TODO Replace string with the slot IDs
    }
}

export interface IGearTemplate {
    id: string;
    brand: keyof typeof BrandSetBonuses | 'Exotic' | 'Crafted';
    quality: string;
    coreAttribute: ICoreAttribute;
    coreAttribute2?: ICoreAttribute;
    coreAttribute3?: ICoreAttribute;
    minorAttribute?: IGearAttribute;
    minorAttribute2?: IGearAttribute;
    minorAttribute3?: IGearAttribute;
    mod?: string;
    mod2?: string;
    mod3?: string;
    talent?: string;
}

export interface IGearTemplateUnique extends IGearTemplate {
    slot: Array<GearSlotID>
}
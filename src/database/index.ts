import { GearSlotID } from "../features/gear/gearSlice";
import { GearTemplates } from "./GearTemplates";
import { UniqueGearTemplates } from "./GearTemplatesUnique";

export function getGearBySlot(slot: GearSlotID) {
    const filteredBySlot = UniqueGearTemplates.filter((template) => {
        return (template.slot as Array<GearSlotID>).includes(slot)
    })
    return [...GearTemplates, ...filteredBySlot]
}
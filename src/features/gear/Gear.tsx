import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { GearSlotID, getInitialGear, selectGearBySlot, equipGear } from "./gearSlice";
import styles from './Gear.module.css';
import { getGearBySlot } from '../../database';


export function Gear(props: {
    slotId: GearSlotID
}) {
    const { slotId } = props;
    const gearTemplatesById = getGearBySlot(slotId);

    const gear = useAppSelector(selectGearBySlot(slotId));
    const gearId = gear.id !== null ? gear.id : '';
    const dispatch = useAppDispatch();

    const currentGearTemplate = gearTemplatesById.find((g) => g.id === gearId)

    // on gear select reset the gear item entirelly using getInitialGear
    const onGearSelect = (event: React.FormEvent<HTMLSelectElement>) => {
        dispatch(equipGear({
            gearSlot: slotId,
            gear: getInitialGear(event.currentTarget.value)
        }))
    }

    return (
        <div className={styles.gearSlot}>
            <h4>{slotId}</h4>
            <select name="gear" id="gear" value={gearId} onChange={onGearSelect}>
                <option value=""> none </option>
                {gearTemplatesById.map((gear) =>
                    <option key={gear.id} value={gear.id}> { gear.id } </option>)
                }
            </select>
            {
                JSON.stringify(currentGearTemplate ?? {})
            }
        </div>
    )
}
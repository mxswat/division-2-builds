import React, { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectGearBySlot } from '../gear/gearSlice';

export function DpsCalculator() {
    const mask = useAppSelector(selectGearBySlot('Mask'));
    const backpack = useAppSelector(selectGearBySlot('Backpack'));
    const chest = useAppSelector(selectGearBySlot('Chest'));
    const gloves = useAppSelector(selectGearBySlot('Gloves'));
    const holster = useAppSelector(selectGearBySlot('Holster'));
    const kneepads = useAppSelector(selectGearBySlot('Kneepads'));

    return (
        <div>
            <p>mask: {JSON.stringify(mask)}</p>
            <p>backpack: {JSON.stringify(backpack)}</p>
            <p>chest: {JSON.stringify(chest)}</p>
            <p>gloves: {JSON.stringify(gloves)}</p>
            <p>holster: {JSON.stringify(holster)}</p>
            <p>kneepads: {JSON.stringify(kneepads)}</p>
        </div>
    )
}
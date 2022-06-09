import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Gear } from '../../database/types';

export interface GearState {
    Mask: Gear,
    Backpack: Gear,
    Chest: Gear,
    Gloves: Gear,
    Holster: Gear,
    Kneepads: Gear,
}

export type GearSlotID =
    'Mask' |
    'Backpack' |
    'Chest' |
    'Gloves' |
    'Holster' |
    'Kneepads';

export const getInitialGear = (id?: string): Gear => ({
    id: id || null,
    brand: null,
    coreAttribute: [null, null],
    coreAttribute2: [null, null],
    coreAttribute3: [null, null],
    minorAttribute: [null, null],
    minorAttribute2: [null, null],
    minorAttribute3: [null, null],
    mod: [null, null],
    mod2: [null, null],
    mod3: [null, null],
    talent: [null]
})

const initialState: GearState = {
    Mask: getInitialGear(),
    Backpack: getInitialGear(),
    Chest: getInitialGear(),
    Gloves: getInitialGear(),
    Holster: getInitialGear(),
    Kneepads: getInitialGear(),
}

export const gearSlice = createSlice({
    name: 'gear',
    initialState,
    reducers: {
        equipGear: (state, action: PayloadAction<{
            gearSlot: GearSlotID,
            gear: Gear
        }>) => {
            state[action.payload.gearSlot] = action.payload.gear;
        }
    }
})

export const { equipGear } = gearSlice.actions

export const selectGearBySlot = (gearSlotId: GearSlotID) => (state: RootState) => {
    return state.gear[gearSlotId]
}


export default gearSlice.reducer;
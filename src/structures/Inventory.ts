import * as _interface from '../types/Inventory';
import { InventorySlot } from "./InventorySlot";

export class Inventory {
    public data: _interface.Inventory;

    constructor(data?: _interface.Inventory) {
        this.data = data ? { ...data } : {} as _interface.Inventory;
    }

    public get slots(): InventorySlot[] {
        return this.data.slots.map(slot => new InventorySlot(slot));
    }

    public set slots(value: InventorySlot[]) {
        this.data.slots = value.map(slot => slot.toJSON());
    }

    public toJSON(): _interface.Inventory {
        return this.data;
    }
}
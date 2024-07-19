import { InventorySlot } from "./InventorySlot";

export interface Inventory {
    slots: InventorySlot[];
    maxSlots: number;
    maxWeight: number;
}
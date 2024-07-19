import { BaseItem } from "./base/BaseItem";

export interface InventorySlot {
    item: BaseItem;
    stock: number;
    equipped: boolean;
}
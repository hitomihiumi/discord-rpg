import * as _interface from '../interface';
import { BaseItem } from "./base/BaseItem";

export class InventorySlot {
    public data: _interface.InventorySlot;

    constructor(data?: _interface.InventorySlot) {
        this.data = data ? { ...data } : {} as _interface.InventorySlot;
    }

    public get item(): BaseItem {
        return new BaseItem(this.data.item);
    }

    public set item(value: BaseItem) {
        this.data.item = value.toJSON();
    }

    public get stock(): number {
        return this.data.stock;
    }

    public set stock(value: number) {
        this.data.stock = value;
    }

    public get equipped(): boolean {
        return this.data.equipped;
    }

    public set equipped(value: boolean) {
        this.data.equipped = value;
    }

    public toJSON(): _interface.InventorySlot {
        return this.data;
    }
}
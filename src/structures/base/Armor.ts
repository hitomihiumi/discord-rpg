import * as _interface from '../../interface';
import { BaseItem } from './BaseItem';

export class Armor {
    public data: _interface.Armor;

    constructor(data?: _interface.Armor) {
        this.data = data ? { ...data } : {} as _interface.Armor;
    }

    public get defense(): {
        physical: number;
        magical: number;
        elemental: {
            fire: number;
            water: number;
            wind: number;
            earth: number;
            light: number;
            dark: number;
        };
    } {
        return this.data.defense;
    }

    public set defense(value: {
        physical: number;
        magical: number;
        elemental: {
            fire: number;
            water: number;
            wind: number;
            earth: number;
            light: number;
            dark: number;
        };
    }) {
        this.data.defense = value;
    }

    public get item(): BaseItem {
        return new BaseItem(this.data.item);
    }

    public set item(value: BaseItem) {
        this.data.item = value.toJSON();
    }

    public get type(): _interface.ArmorType {
        return this.data.type;
    }

    public set type(value: _interface.ArmorType) {
        this.data.type = value;
    }

    public toJSON(): _interface.Armor {
        return this.data;
    }
}
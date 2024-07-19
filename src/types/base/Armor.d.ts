import { BaseItem } from './BaseItem';
import { ArmorType } from "../enum";

export interface Armor {
    defense: {
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
    };
    item: BaseItem;
    type: ArmorType;
}
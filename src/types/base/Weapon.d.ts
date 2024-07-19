import { WeaponType, ElementType } from "../enum";
import { Mastery } from "./Mastery";

export interface Weapon {
    name: string;
    description: string;
    type: WeaponType;
    damage: {
        min: number;
        max: number;
    };
    element: ElementType;
    mastery: Mastery;
}
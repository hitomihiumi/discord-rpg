import { Stats } from "./Stats";
import { Inventory } from "./Inventory";

export interface Character {
    stats: Stats;
    inventory: Inventory;
    name: string;
}

//export interface CharacterInteraction {
//    attack: ;
//}
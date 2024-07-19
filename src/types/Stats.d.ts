import { Skill } from './base/Skill';
import { Mastery } from "./base/Mastery";
import { CharacterClass } from "./enum";

export interface Stats {
    health: number;
    mana: number;
    special: {
        strength: number;
        dexterity: number;
        intelligence: number;
        luck: number;
    };
    resistances: {
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
    level: number;
    experience: number;
    class: CharacterClass;
    mastery: Mastery[],
    skills: Skill[],
}
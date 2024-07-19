import * as _interface from '../interface';

export class Stats {
    public data: _interface.Stats;

    constructor(data?: _interface.Stats) {
        this.data = data ? { ...data } : {} as _interface.Stats;
    }

    public get health(): number {
        return this.data.health;
    }

    public set health(value: number) {
        this.data.health = value;
    }

    public get mana(): number {
        return this.data.mana;
    }

    public set mana(value: number) {
        this.data.mana = value;
    }

    public get special(): { strength: number; dexterity: number; intelligence: number; luck: number; } {
        return this.data.special;
    }

    public set special(value: { strength: number; dexterity: number; intelligence: number; luck: number; }) {
        this.data.special = value;
    }

    public get resistances(): { physical: number; magical: number; elemental: { fire: number; water: number; wind: number; earth: number; light: number; dark: number; }; } {
        return this.data.resistances;
    }

    public set resistances(value: { physical: number; magical: number; elemental: { fire: number; water: number; wind: number; earth: number; light: number; dark: number; }; }) {
        this.data.resistances = value;
    }

    public get level(): number {
        return this.data.level;
    }

    public set level(value: number) {
        this.data.level = value;
    }

    public get experience(): number {
        return this.data.experience;
    }

    public set experience(value: number) {
        this.data.experience = value;
    }

    public get class(): _interface.CharacterClass {
        return this.data.class;
    }

    public set class(value: _interface.CharacterClass) {
        this.data.class = value;
    }

    public get mastery(): _interface.Mastery[] {
        return this.data.mastery;
    }

    public set mastery(value: _interface.Mastery[]) {
        this.data.mastery = value;
    }

    public get skills(): _interface.Skill[] {
        return this.data.skills;
    }

    public set skills(value: _interface.Skill[]) {
        this.data.skills = value;
    }

    public toJSON(): _interface.Stats {
        return this.data;
    }
}
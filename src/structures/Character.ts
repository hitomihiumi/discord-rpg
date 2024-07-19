import * as _interface from '../interface';

export class Character {
    public data: _interface.Character;

    constructor(data?: _interface.Character) {
        this.data = data ? { ...data } : {} as _interface.Character;
    }

    public get stats(): _interface.Stats {
        return this.data.stats;
    }

    public set stats(value: _interface.Stats) {
        this.data.stats = value;
    }

    public get inventory(): _interface.Inventory {
        return this.data.inventory;
    }

    public set inventory(value: _interface.Inventory) {
        this.data.inventory = value;
    }

    public get name(): string {
        return this.data.name;
    }

    public set name(value: string) {
        this.data.name = value;
    }


}
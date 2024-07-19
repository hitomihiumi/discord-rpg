import * as _interface from '../../interface';

export class Skill {
    public data: _interface.Skill;

    constructor(data?: _interface.Skill) {
        this.data = data ? { ...data } : {} as _interface.Skill;
    }

    public get name(): string {
        return this.data.name;
    }

    public set name(value: string) {
        this.data.name = value;
    }

    public get description(): string {
        return this.data.description;
    }

    public set description(value: string) {
        this.data.description = value;
    }

    public toJSON(): _interface.Skill {
        return this.data;
    }
}
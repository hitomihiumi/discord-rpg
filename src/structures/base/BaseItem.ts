import * as _interface from '../../interface';

export class BaseItem {
    public data: _interface.BaseItem;

    constructor(data?: _interface.BaseItem) {
        this.data = data ? { ...data } : {} as _interface.BaseItem;
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

    public get weight(): number {
        return this.data.weight;
    }

    public set weight(value: number) {
        this.data.weight = value;
    }

    public get maxStack(): number {
        return this.data.maxStack;
    }

    public set maxStack(value: number) {
        this.data.maxStack = value;
    }

    public get price(): number {
        return this.data.price;
    }

    public set price(value: number) {
        this.data.price = value;
    }

    public get category(): string {
        return this.data.category;
    }

    public set category(value: string) {
        this.data.category = value;
    }

    public get image(): string {
        return this.data.image;
    }

    public set image(value: string) {
        this.data.image = value;
    }

    public toJSON(): _interface.BaseItem {
        return this.data;
    }
}
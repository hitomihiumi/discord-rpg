import { SkillType, CostType, ElementType } from '../enum'

export interface Skill {
    name: string;
    description: string;
    cost: number;
    сooldown: number;
    type: SkillType;
    costType: CostType;
    effect: {
        element: ElementType;
        amount: number;
        zone: number;
    };
}
import { ThingType } from './thingtype';
import { Tag } from './tag';

export class Thing {
    id: number;
    name: string;
    description: string;
    typeId: number;
    type: ThingType;
    tags: Array<Tag>;
}

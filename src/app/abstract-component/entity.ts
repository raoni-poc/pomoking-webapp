import {Indentifier} from '../interfaces/Indentifier';
import {Timestampable} from '../interfaces/Timestampable';
import {ArraySerializable} from '../interfaces/ArraySerializable';

export abstract class Entity implements Indentifier, Timestampable {
    id: number;
    created_at: string;
    updated_at: string;
    completed_at: string;
}

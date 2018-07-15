import { BaseEntity } from './base-entity';

export class Colegio implements BaseEntity {
    constructor(
        public id?: number,
        public nombre?: string,
        public direccion?: string,
        public telefono?: string,
        public email?: string,
        public sie?: string,
    ) {
    }
}

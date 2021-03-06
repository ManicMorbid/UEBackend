import { BaseEntity} from '../../base-entity';
import { User } from '../../user.model';

export class Curso implements BaseEntity {
    constructor(
        public id?: number,
        public nivel?: string,
        public grado?: string,
        public paralelo?: string,
        public gestion?: number,
        public ambiente?: BaseEntity,
        public materias?: BaseEntity[],
        public estudiantes?: User[],
    ) {
    }
}

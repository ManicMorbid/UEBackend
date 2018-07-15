import { BaseEntity} from '../../base-entity';
import { User } from '../../user.model';

export class Materia implements BaseEntity {
    constructor(
        public id?: number,
        public nombre?: string,
        public descripcion?: string,
        public grado?: string,
        public profesor?: User,
        public cursos?: BaseEntity[],
    ) {
    }
}

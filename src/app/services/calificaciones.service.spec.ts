import { TestBed, inject } from '@angular/core/testing';

import { CalificacionesService } from './calificaciones.service';

describe('CalificacionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalificacionesService]
    });
  });

  it('should be created', inject([CalificacionesService], (service: CalificacionesService) => {
    expect(service).toBeTruthy();
  }));
});

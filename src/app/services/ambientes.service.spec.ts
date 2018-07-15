import { TestBed, inject } from '@angular/core/testing';

import { AmbientesService } from './ambientes.service';

describe('AmbientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmbientesService]
    });
  });

  it('should be created', inject([AmbientesService], (service: AmbientesService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ColegioService } from './colegio.service';

describe('ColegioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColegioService]
    });
  });

  it('should be created', inject([ColegioService], (service: ColegioService) => {
    expect(service).toBeTruthy();
  }));
});

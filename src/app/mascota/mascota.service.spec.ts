import { TestBed, inject } from '@angular/core/testing';

import { MascotasService } from './mascota.service';

describe('MascotasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MascotasService]
    });
  });

  it('should be created', inject([MascotasService], (service: MascotasService) => {
    expect(service).toBeTruthy();
  }));
});

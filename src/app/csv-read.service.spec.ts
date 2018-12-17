import { TestBed } from '@angular/core/testing';

import { CsvReadService } from './csv-read.service';

describe('CsvReadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CsvReadService = TestBed.get(CsvReadService);
    expect(service).toBeTruthy();
  });
});

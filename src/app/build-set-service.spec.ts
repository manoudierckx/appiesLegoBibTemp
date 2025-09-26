import { TestBed } from '@angular/core/testing';

import { BuildSetService } from './build-set-service';

describe('BuildSetService', () => {
  let service: BuildSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { JackPotService } from './jack-pot.service';

describe('JackPotService', () => {
  let service: JackPotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JackPotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

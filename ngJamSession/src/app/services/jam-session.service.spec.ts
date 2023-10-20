import { TestBed } from '@angular/core/testing';

import { JamSessionService } from './jam-session.service';

describe('JamSessionService', () => {
  let service: JamSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JamSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

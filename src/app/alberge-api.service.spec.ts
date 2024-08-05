import { TestBed } from '@angular/core/testing';

import { AlbergeApiService } from './alberge-api.service';

describe('AlbergeApiService', () => {
  let service: AlbergeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbergeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

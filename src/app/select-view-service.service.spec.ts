import { TestBed } from '@angular/core/testing';

import { SelectViewServiceService } from './select-view-service.service';

describe('SelectViewServiceService', () => {
  let service: SelectViewServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectViewServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

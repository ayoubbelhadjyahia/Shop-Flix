import { TestBed } from '@angular/core/testing';

import { ConsumerForumService } from './consumer-forum.service';

describe('ConsumerForumService', () => {
  let service: ConsumerForumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerForumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

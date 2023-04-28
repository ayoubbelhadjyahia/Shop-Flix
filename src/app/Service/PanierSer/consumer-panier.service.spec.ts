import { TestBed } from '@angular/core/testing';

import { ConsumerPanierService } from './consumer-panier.service';

describe('ConsumerPanierService', () => {
  let service: ConsumerPanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerPanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

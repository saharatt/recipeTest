import { TestBed, inject } from '@angular/core/testing';

import { Test01Service } from './test01.service';

describe('Test01Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Test01Service]
    });
  });

  it('should ...', inject([Test01Service], (service: Test01Service) => {
    expect(service).toBeTruthy();
  }));
});

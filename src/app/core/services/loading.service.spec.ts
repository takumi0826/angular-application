import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('isLoadingがtrueになること', () => {
    service.startLoading();
    expect(service.isLoading).toBeTruthy();
  });

  it('isLoadingがtrueになること', () => {
    service.stopLoading();
    expect(service.isLoading).toBeFalsy();
  });
});

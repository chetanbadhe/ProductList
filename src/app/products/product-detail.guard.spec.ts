import { TestBed } from '@angular/core/testing';

import { ProductDetailGuard } from './product-detail.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductDetailGuard', () => {
  let guard: ProductDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(ProductDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

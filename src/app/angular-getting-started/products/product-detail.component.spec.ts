import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailGSComponent } from './product-detail.component';

describe('ProductDetailGSComponent', () => {
  let component: ProductDetailGSComponent;
  let fixture: ComponentFixture<ProductDetailGSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailGSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

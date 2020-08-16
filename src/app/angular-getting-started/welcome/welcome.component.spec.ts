import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeGSComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeGSComponent;
  let fixture: ComponentFixture<WelcomeGSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeGSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

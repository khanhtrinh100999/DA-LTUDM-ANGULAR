import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemgiaodichComponent } from './themgiaodich.component';

describe('ThemgiaodichComponent', () => {
  let component: ThemgiaodichComponent;
  let fixture: ComponentFixture<ThemgiaodichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemgiaodichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemgiaodichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

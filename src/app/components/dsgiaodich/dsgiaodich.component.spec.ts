import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsgiaodichComponent } from './dsgiaodich.component';

describe('DsgiaodichComponent', () => {
  let component: DsgiaodichComponent;
  let fixture: ComponentFixture<DsgiaodichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsgiaodichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsgiaodichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtingiaodichComponent } from './thongtingiaodich.component';

describe('ThongtingiaodichComponent', () => {
  let component: ThongtingiaodichComponent;
  let fixture: ComponentFixture<ThongtingiaodichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongtingiaodichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtingiaodichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

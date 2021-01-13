import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhaibaosoduComponent } from './khaibaosodu.component';

describe('KhaibaosoduComponent', () => {
  let component: KhaibaosoduComponent;
  let fixture: ComponentFixture<KhaibaosoduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhaibaosoduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhaibaosoduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

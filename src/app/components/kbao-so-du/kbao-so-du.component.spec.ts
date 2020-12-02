import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbaoSoDuComponent } from './kbao-so-du.component';

describe('KbaoSoDuComponent', () => {
  let component: KbaoSoDuComponent;
  let fixture: ComponentFixture<KbaoSoDuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbaoSoDuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbaoSoDuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

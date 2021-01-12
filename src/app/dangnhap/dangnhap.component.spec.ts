import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { DangnhapComponent } from './dangnhap.component';
//import { fakeData } from "../fake-data";
describe('DangnhapComponent', () => {
  let component: DangnhapComponent;
  let fixture: ComponentFixture<DangnhapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangnhapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangnhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

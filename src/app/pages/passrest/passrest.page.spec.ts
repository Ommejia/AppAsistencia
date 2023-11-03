import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassrestPage } from './passrest.page';

describe('PassrestPage', () => {
  let component: PassrestPage;
  let fixture: ComponentFixture<PassrestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PassrestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

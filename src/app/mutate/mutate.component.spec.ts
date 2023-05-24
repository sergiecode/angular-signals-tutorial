import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutateComponent } from './mutate.component';

describe('MutateComponent', () => {
  let component: MutateComponent;
  let fixture: ComponentFixture<MutateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutateComponent]
    });
    fixture = TestBed.createComponent(MutateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

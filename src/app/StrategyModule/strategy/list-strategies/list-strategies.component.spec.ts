import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStrategiesComponent } from './list-strategies.component';

describe('ListStrategiesComponent', () => {
  let component: ListStrategiesComponent;
  let fixture: ComponentFixture<ListStrategiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStrategiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

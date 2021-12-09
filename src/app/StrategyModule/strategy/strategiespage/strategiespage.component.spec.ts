import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategiespageComponent } from './strategiespage.component';

describe('StrategiespageComponent', () => {
  let component: StrategiespageComponent;
  let fixture: ComponentFixture<StrategiespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategiespageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategiespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

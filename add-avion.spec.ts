import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AddAvion } from './add-avion';

describe('AddAvion', () => {
  let component: AddAvion;
  let fixture: ComponentFixture<AddAvion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAvion],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AddAvion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

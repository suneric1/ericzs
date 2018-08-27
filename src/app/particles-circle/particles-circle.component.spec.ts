import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticlesCircleComponent } from './particles-circle.component';

describe('ParticlesCircleComponent', () => {
  let component: ParticlesCircleComponent;
  let fixture: ComponentFixture<ParticlesCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticlesCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticlesCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

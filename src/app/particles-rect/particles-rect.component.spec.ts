import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticlesRectComponent } from './particles-rect.component';

describe('ParticlesRectComponent', () => {
  let component: ParticlesRectComponent;
  let fixture: ComponentFixture<ParticlesRectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticlesRectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticlesRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

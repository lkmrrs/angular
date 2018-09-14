import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part1compComponent } from './part1comp.component';

describe('Part1compComponent', () => {
  let component: Part1compComponent;
  let fixture: ComponentFixture<Part1compComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part1compComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part1compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

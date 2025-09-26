import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildSetComponent } from './build-set-component';

describe('BuildSetComponent', () => {
  let component: BuildSetComponent;
  let fixture: ComponentFixture<BuildSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

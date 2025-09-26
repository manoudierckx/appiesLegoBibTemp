import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationAdminComponent } from './location-admin-component';

describe('LocationAdminComponent', () => {
  let component: LocationAdminComponent;
  let fixture: ComponentFixture<LocationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

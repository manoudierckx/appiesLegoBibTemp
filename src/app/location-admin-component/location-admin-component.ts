import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationService } from '../location-service';
import { LocationModel } from '../models/location-model';

@Component({
  selector: 'app-location-admin-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './location-admin-component.html',
  styleUrl: './location-admin-component.css'
})
export class LocationAdminComponent implements OnInit {
  private locationService = inject(LocationService);

  locations: LocationModel[] = [];
  isInFormMode = false; // whether form is visible
  isEditMode = false;   // whether editing or adding
  selectedLocation: LocationModel | null = null;

  ngOnInit() {
    this.locations = this.locationService.getLocations();
  }

  openAddForm() {
    this.isInFormMode = true;
    this.isEditMode = false;
    this.selectedLocation = { id: 0, name: '', email: '', phoneNumber: '' };
  }

  openEditForm(location: LocationModel) {
    this.isInFormMode = true;
    this.isEditMode = true;
    this.selectedLocation = { ...location }; // shallow copy for editing
  }

  saveLocation() {
    if (!this.selectedLocation) return;

    // trim values
    const name = this.selectedLocation.name.trim();
    const email = this.selectedLocation.email.trim();
    const phone = this.selectedLocation.phoneNumber.trim();

    if (!name || !email || !phone) {
      alert('Alle velden zijn verplicht.');
      return;
    }

    this.selectedLocation.name = name;
    this.selectedLocation.email = email;
    this.selectedLocation.phoneNumber = phone;

    if (this.isEditMode) {
      this.locationService.editLocation(this.selectedLocation);
    } else {
      // assign new ID for new location
      const newId = this.locations.length ? Math.max(...this.locations.map(l => l.id)) + 1 : 1;
      this.selectedLocation.id = newId;
      this.locationService.addLocation(this.selectedLocation);
    }

    this.locations = this.locationService.getLocations();
    this.isInFormMode = false;
    this.selectedLocation = null;
  }

  cancelForm() {
    this.isInFormMode = false;
    this.selectedLocation = null;
  }

  deleteLocation(locationId: number) {
    this.locationService.deleteLocation(locationId);
    this.locations = this.locationService.getLocations();
  }
}

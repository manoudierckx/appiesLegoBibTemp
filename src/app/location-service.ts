import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  getLocations() {
    return this.locations;
  }

  addLocation(location: { id: number; name: string; email: string; phoneNumber: string }) {
    this.locations.push(location);
  }

  deleteLocation(locationId: number) {
    this.locations = this.locations.filter(l => l.id !== locationId);
  }

  editLocation(updatedLocation: { id: number; name: string; email: string; phoneNumber: string }) {
    const index = this.locations.findIndex(l => l.id === updatedLocation.id);
    if (index !== -1) {
      this.locations[index] = updatedLocation;
    }
  }

  private locations = [
    { id: 1, name: 'City Location', email: 'city@location.com', phoneNumber: '123-456-7890' },
    { id: 2, name: 'County General', email: 'county@location.com', phoneNumber: '987-654-3210' },
    { id: 3, name: 'St. Mary\'s', email: 'st.marys@location.com', phoneNumber: '555-123-4567' }
  ];
}

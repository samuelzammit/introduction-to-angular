import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  @Input() locationList: HousingLocation[] = [];
<<<<<<< HEAD
  results: HousingLocation[] = [];

  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();
=======
  results:HousingLocation[] = [];
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();
>>>>>>> experimenting

  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    if (!searchText) return;

<<<<<<< HEAD
    this.results = this.locationList.filter((location: any) => location.city.toLowerCase().includes(searchText.toLowerCase()));
  }

  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }
=======
    this.results = this.locationList
      .filter(
        location => location.city.toLowerCase().includes(searchText.toLowerCase())
      )
  }

  selectHousingLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location)
  }

>>>>>>> experimenting
}

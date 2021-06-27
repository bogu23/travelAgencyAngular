import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OffersService} from "../offers.service";
import {OfferModel} from "../../../models/offer-model";

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.css']
})
export class ListOffersComponent implements OnInit {

  @Output() onSelect: EventEmitter<number>;
  offers: Array<OfferModel> = [];

  constructor(private offersService: OffersService) {
    this.onSelect = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.offers = this.offersService.get();
  }

  onSelectOffer(id: number) {
    this.onSelect.emit(id);
  }
}

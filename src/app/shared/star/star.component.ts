import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges{

  @Input() rating: number;

  @Output() ratingClicked: EventEmitter<string>;

  public starWidth: number;

  constructor() {
    this.starWidth = 0;
    this.rating = 4;
    this.ratingClicked = new EventEmitter<string>();
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { BidAreaDto } from 'src/app/Services/models/BidListItem.model';

@Component({
  selector: 'app-bid-area',
  templateUrl: './bid-area.component.html',
  styleUrls: ['./bid-area.component.scss']
})
export class BidAreaComponent implements OnInit {
  @Input() data: BidAreaDto[];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { BidAreaDto } from 'src/app/Services/models/BidListItem.model';

export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

interface BitCategory {
  category: string;
  items: BidCatItem[];
  total: number;
}

interface BidCatItem {
  id: number;
  sub: string;
  area: string;
  description: string;
  quantity: number;
  unitCost: number;
}

@Component({
  selector: 'app-bid-items',
  templateUrl: './bid-items.component.html',
  styleUrls: ['./bid-items.component.scss']
})

export class BidItemsComponent implements OnInit {
  @Input() data: BidAreaDto[];
  data2: BitCategory[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.data);
    this.data.forEach(area => {
      area.items.forEach(item => {
        if (item.quantity > 0) {
          let cat: BitCategory = this.data2.find(f => f.category === item.category);
          if (cat == null) {
            cat = {
              category: item.category,
              items: [],
              total: 0
            };
            this.data2.push(cat);
          }

          const item2: BidCatItem = {
            id: item.id,
            sub: item.sub,
            area: area.name,
            description: item.description,
            quantity: item.quantity,
            unitCost: item.unitCost,
          };
          cat.total += item2.quantity * item2.unitCost;
          cat.items.push(item2);
          cat.items.sort((a, b) => {
            if (a.sub === b.sub) {
              if (a.description === b.description) {
                return compare(a.area, b.area);
              } else {
                return compare(a.description, b.description);
              }
            } else {
              return compare(a.sub, b.sub);
            }
          });
        }

      });
    });
  }

}

import { Directive, EventEmitter, Input, Output, HostBinding, HostListener } from '@angular/core';

export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

export interface SortEvent {
  column: string;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
//  host: {
//    '[class.asc]': 'direction === "asc"',
//    '[class.desc]': 'direction === "desc"',
//    '(click)': 'onRotate()'
//  }
})
export class NgbdSortableHeader  {

  constructor() {}

  @Input() sortable: string;
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  @HostBinding('class.asc') get asc() { return this.direction === 'asc';}
  @HostBinding('class.desc') get desc() { return this.direction === 'desc'; }
  @HostListener('click') onClick() {this.onRotate()}

  onRotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}

import { Address } from './JobItem.model';

export interface BidListItem {
  id: number;
  jobId: number;
  address: Address;
  progjectManager: string;
  date: Date;
  squareFoot: string;
  bedBath: string;
  lockBox: string;
  year: string;
  renoTotal: number;
}

export interface BidItemDto {
  id: number;
  bidAreaId: number;
  sub: string;
  category: string;
  description: string;
  quantity: number;
  unitCost: number;
}

export interface BidAreaDto {
  id: number;
  bidSheetId: number;
  name: string;
  description: string;
  items: BidItemDto[];
}

export interface Bid {
  id: number;
  jobId: number;
  address: string;
  progjectManager: string;
  date: Date;
  squareFoot: string;
  bedBath: string;
  lockBox: string;
  year: string;
  renoTotal: number;
  areas: BidAreaDto;
}

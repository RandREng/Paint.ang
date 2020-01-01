export interface JobItem {
  id: number;
  clientId: number;
  address: Address;
  city: string;
  state: string;
  zip: string;
}

export interface Address {
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
}


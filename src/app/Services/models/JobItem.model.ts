export interface JobItem {
  id: number;
  clientId: number;
  projectManager: string;
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


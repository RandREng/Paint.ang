import { ClientItem } from './ClientItem.model';
import { JobItem } from './JobItem.model';
import { PageResult } from './PageResult.models';

export interface ClientDetails {
  id: number;
  name: string;
  clientType: string;

  billingAddress: string;
  notes: string;
  active: boolean;
//  phoneNumbers": [],
  clients: ClientItem[];
  jobsPage: PageResult<JobItem>;
}

import { Component, OnInit } from '@angular/core';
import { PageResult } from 'src/app/Services/models/PageResult.model';
import { JobItem } from 'src/app/Services/models/JobItem.model';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  data: PageResult<JobItem>;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.pageChange(1);
  }

  pageChange(page: number)
  {
    this.apiService.getJobs(page).subscribe(
      (data => {this.data = data;})
    )
  }

}

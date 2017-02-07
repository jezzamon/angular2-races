import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css']
})
export class RaceDetailComponent implements OnInit {

  private raceId;
	
	//inject ActivatedRoute
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
			//ActivatedRoute is an observable, we use for each because it can change
		this.route.params.forEach(
		  (params: Params) => this.raceId = params['id']
		);
  }

}

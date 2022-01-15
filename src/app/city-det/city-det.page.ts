import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-det',
  templateUrl: './city-det.page.html',
  styleUrls: ['./city-det.page.scss'],
})
export class CityDetPage implements OnInit {
  city: string ;
  img:string;
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
     this.city = this.route.snapshot.paramMap.get('city');
     this.img = this.route.snapshot.paramMap.get('img');

  }

}

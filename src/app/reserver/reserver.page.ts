import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.page.html',
  styleUrls: ['./reserver.page.scss'],
})
export class ReserverPage implements OnInit {
  reservationForm: FormGroup;
  cityy : String;
  city1: string ;

  constructor(private city: CityService,
    public fb: FormBuilder,private route: ActivatedRoute) { 
    
    }

  ngOnInit() {
    this.city1 = this.route.snapshot.paramMap.get('city');
    
    this.reservationForm = this.fb.group({
      city: ['', [Validators.required]],
      date: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
    })
  }
  CreateRecord() {
    console.log(this.reservationForm.value);
    this.city.create_reservation(this.reservationForm.value).then(resp => {
      this.reservationForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }

}

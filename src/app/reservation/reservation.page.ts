import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Reservation } from '../models/reservation';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  reservationList = [];
  reservationData: Reservation;
  date : String;
  constructor(private reservation: CityService,
    public fb: FormBuilder) { 
      this.reservationData = {} as Reservation;
    }

  ngOnInit() {
    this.reservation.read_reservation().subscribe(data => {

      this.reservationList = data.map(e => {
        return {
          $key: e.payload.doc.id,
          isEdit: false,
          city: e.payload.doc.data()['city'],
          date: e.payload.doc.data()['date'],
          nom: e.payload.doc.data()['nom'],
          prenom: e.payload.doc.data()['prenom'],
          email: e.payload.doc.data()['email'],
        };
      })
      console.log(this.reservationList);

    });
  }
  RemoveRecord(rowID) {
    this.reservation.delete_reservation(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditDate = record.date;
    record.EditPrenom = record.prenom;
    record.EditNom = record.nom;
    record.EditEmail = record.email;
  }
  UpdateRecord(recordRow) {
    let record = {};
    record['date'] = recordRow.EditDate;
    record['prenom'] = recordRow.EditPrenom;
    record['nom'] = recordRow.EditNom;
    record['email'] = recordRow.EditEmail;
    this.reservation.update_reservation(recordRow.$key, record);
    recordRow.isEdit = false;
  }


  }



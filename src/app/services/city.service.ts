import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  collection = 'city';
   

  constructor( private firestore: AngularFirestore) { 

   }
   create_reservation(record) {
    return this.firestore.collection(this.collection).add(record);
  }
  read_reservation() {
    return this.firestore.collection(this.collection).snapshotChanges();
  }

  delete_reservation(record_id) {
    this.firestore.doc(this.collection + '/' + record_id).delete();
  }

 
  update_reservation(recordID, record) {
    this.firestore.doc(this.collection + '/' + recordID).update(record);
  }
}

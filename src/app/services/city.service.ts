import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  collectionName = 'city';
   

  constructor( private firestore: AngularFirestore) { 

   }
   create_reservation(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }
  read_reservation() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  delete_reservation(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }

 
  update_reservation(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }
}

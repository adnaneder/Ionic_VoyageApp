import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { error } from 'console';

@Injectable()

export class AuthService 
{
  user$: Observable<User>;
  user: User;

  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private LoadingCtrl: LoadingController,
    private toastr: ToastController
  ) { 
    this.user$ = this.afauth.authState.pipe(
      switchMap( user => {
        if(user)
        {
          return this.afs.doc<User>('user/$(user.uid)').valueChanges();
        } else {
          return of(null);
        }
      })
    )
  } //end constructor

  async signIn(email , password){
    const loading = await this.LoadingCtrl.create({
      message: 'Authenticating..',
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();

    this.afauth.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL)
    .then(()=>{
      this.afauth.signInWithEmailAndPassword(email, password)
      .then((data)=>
      {
        if(!data.user.emailVerified)
        {
          loading.dismiss();
          this.toast('Please verify your email adress', 'warning');
          this.afauth.signOut();
        } else {
          loading.dismiss();
          this.router.navigate(['/home']);
        }
      })
      .catch(error => {
        loading.dismiss();
        this.toast(error.message, 'danger');
      })    
    })
    .catch(error => {
      loading.dismiss();
      this.toast(error.message, 'danger');
    });
  } // end signIn

  async signOut(){
    const loading = await this.LoadingCtrl.create({
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();

    this.afauth.signOut()
    .then(()=> {
      loading.dismiss();
      this.router.navigate(['/login']);
    })
    } // End signOut


  async toast(message, status){
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }// end toast
}

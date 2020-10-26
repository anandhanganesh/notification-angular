import { Component, OnInit } from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging'
import { mergeMapTo } from 'rxjs/operators';
import {FirebaseMessagingService} from './firebase-messaging.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'notification-angular';
  requestPermission:Function;
  listen:Function;
  unregister:Function;
  constructor(private fmService: FirebaseMessagingService) { 
      
  }

  ngOnInit(){
    this.requestPermission=this.fmService.requestPermission;
    this.listen=this.fmService.listen;
    this.unregister=this.fmService.unregister;
  }
  // requestPermission() {
  //   this.afMessaging.requestPermission
  //     .pipe(mergeMapTo(this.afMessaging.tokenChanges))
  //     .subscribe(
  //       (token) => { console.log('Permission granted! Save to the server!', token); },
  //       (error) => { console.error(error); },  
  //     );
  // }
  
  // listen() {
  //   this.afMessaging.messages
  //     .subscribe((message) => {   
  //       console.log(message); 
  //     });
  // }


  // unregister(){
  //   navigator.serviceWorker.getRegistrations().then(registrations=>{
  //     registrations.forEach(reg=>{
  //       reg.unregister();
  //       window.location.reload();
  //     });
  //   });
  // }
}

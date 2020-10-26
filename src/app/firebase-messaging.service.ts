import { Injectable } from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseMessagingService {

  constructor(private fmsg:AngularFireMessaging){
      this.requestPermission=this.requestPermission.bind(this);
      this.listen=this.listen.bind(this);
   }

  requestPermission() {
    this.fmsg.requestPermission
      .pipe(mergeMapTo(this.fmsg.tokenChanges))
      .subscribe(
        (token) => { 
          console.log('Permission granted! Save to the server!', token); 
          //sendNotificationToServer();
        },
        (error) => { 
          console.error(error); 
        },  
      );
  }
  
  listen() {
    this.fmsg.messages
      .subscribe((message) => { 
          console.log(message); 
          //send Incoming Messages To Toast Service
      });
  }

  unregister(){
    navigator.serviceWorker.getRegistrations().then(registrations=>{
      registrations.forEach(reg=>{
        reg.unregister();
        window.location.reload();
      });
    });
  }

}

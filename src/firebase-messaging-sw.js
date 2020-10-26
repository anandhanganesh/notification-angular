importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');



firebase.initializeApp({
    apiKey: "AIzaSyCCtB8w438rL9VIC2vYI9ECHpdGliRvlRc",
    authDomain: "gowri-silks.firebaseapp.com",
    databaseURL: "https://gowri-silks.firebaseio.com",
    projectId: "gowri-silks",
    storageBucket: "gowri-silks.appspot.com",
    messagingSenderId: "398850641612",
    appId: "1:398850641612:web:938689105ce44a54533c69"
  });

const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload){
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   const notificationTitle=payload.notification.title;
//   const notificationOptions = {
//           body: payload.notification.body,
//           icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhuman&psig=AOvVaw2o2nDseyphZUOoKRddqw06&ust=1603779241220000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPichbLN0ewCFQAAAAAdAAAAABAD"
//         };
//   return self.registration.showNotification(notificationTitle,notificationOptions);
// });

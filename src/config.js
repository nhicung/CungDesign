import firebase from 'firebase';

let config = {
    authDomain: "cung-design-web.firebaseapp.com",
    databaseURL: "https://cung-design-web.firebaseio.com/",
    projectId: "cung-design-web",
  };
  firebase.initializeApp(config);
  
  export default firebase;
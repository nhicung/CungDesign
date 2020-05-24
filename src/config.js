import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyA_RrviVvPsb7q6U9QmFKZ7U9Mxj3hrH-0",
    authDomain: "cung-design-web.firebaseapp.com",
    databaseURL: "https://cung-design-web.firebaseio.com/",
    projectId: "cung-design-web",
  };
  firebase.initializeApp(config);
  
  export default firebase;
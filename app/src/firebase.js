import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyAVSaBEB0OyTwSofhpv3eMD5WoLo24kftc',
	authDomain: 'todolistproject-adbe6.firebaseapp.com',
	projectId: 'todolistproject-adbe6',
	storageBucket: 'todolistproject-adbe6.appspot.com',
	messagingSenderId: '987540970753',
	appId: '1:987540970753:web:3fc2c0bde63e1e6171cf00',
	databaseURL:
		'https://todolistproject-adbe6-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

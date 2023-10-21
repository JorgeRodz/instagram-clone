import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// here i want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDP2GUHe1efuOSQ-HZRlwQUWl9lGz1SfAI",
  authDomain: "instragram-clone-b17ec.firebaseapp.com",
  projectId: "instragram-clone-b17ec",
  storageBucket: "instragram-clone-b17ec.appspot.com",
  messagingSenderId: "563209846121",
  appId: "1:563209846121:web:9095345c15afee0dd951f8"
}

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where i want to call the seed file (only ONCE!)
// seedDatabase(firebase);

export { firebase, FieldValue };

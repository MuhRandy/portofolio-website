<!-- # Portofolio Website Muhammad Randy

a simple portofolio with vite + react and tailwind

# assets

- [Magic Patern - Blob Generator](https://www.magicpattern.design/tools/blob-generator)

# Reminder

- [How to Deploy to Github Pages](https://medium.com/@badreddine.boudaoud21/create-a-react-app-with-vite-and-deploy-it-on-github-48b82e19f821) -->

This is a React project bootstrapped with [Vite](https://vitejs.dev/guide/) and Firebase as a Backend.

# Getting Started

First, add your firebase console cofiguration (firebase-config.ts) at src/utils, its look like this:

```
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: xxxxxx,
  authDomain: xxxxxx,
  projectId: xxxxxx,
  storageBucket: xxxxxx,
  messagingSenderId: xxxxxx,
  appId: xxxxxx,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Storage
export const storage = getStorage(app);

// Initialize firestore db
export const db = getFirestore(app);

// Initialize auth from firebase
export const auth = getAuth(app);
```

Then, run the development server:

```
pnpm dev
```

Open http://localhost:5173 with your browser to see the result.

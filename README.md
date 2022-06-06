Boilerplate code for a React app using Firebase services, with email account user login already set up.

# Setup

1. Setup a Firebase project: https://console.firebase.google.com/

2. Make sure you have the Firebase CLI installed: https://firebase.google.com/docs/cli

3. Update `src/firebase.js` with your project's information:
```
firebase.initializeApp ({
    apiKey: "<your api key here>",
    authDomain: "<your auth domain here>",
    databaseURL: "<your database url here>",
    projectId: "<your project id here>",
    storageBucket: "<your storage bucket here>",
    messagingSenderId: "<your messaging sender id here>",
    appId: "<your app id here>"
});
```

4. Install dependencies
```
$ npm install
```

Run the project with each command in a separate terminal window:
```
$ npm start
$ npm run emulators
```

Once the React project starts running, it should open http://localhost:3000/ in your browser automatically.

When you're ready to build for production:
```
$ npm run build
```

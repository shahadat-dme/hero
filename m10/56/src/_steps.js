/*
Steps to use firebase
1. create a project on console.firebase.google.com
2. npm install firebase
3. Register applications -> Go to docs -> Build -> Authentication -> Web -> Get Started -> Click- install the Firebase JS SDK and initialize Firebase.
4. create firebase.init config from firebase project setting init a file firebase.init.js
5. export default app
6. import getAuth from firebase/auth and create auth = getAuth(app)
7. import app firebase init.js into your app.js 
8. turn on authentication 
9. create google provider
10. use signInWithPopup and pass auth and provider
11. handle then and catch error
*/
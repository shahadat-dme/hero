/*
1. create a new project in console.firebase.google.com
2. npm install firebase
3. create firebase.init.js and import getAuth to export auth
4. firebase setting -> Authentication -> enable Email and password auth
5. create Login, SignUp , setup route
6. attach form field handler and form submit handler
7. npm install --save react-firebase-hooks
8. useCreateUserWithEmailAndPassword form react-firebase-hooks
9. if user is create redirect to the expected page
10. useSignInWithEmailAndPassword for LogIn
11. create RequireAuth component => check user exists also tract user location
12. In route wrap Protected Component by useing RequireAuth component
*/

/*
firebase hosting steps
1. npm install -g firebase-tools (one time for your computer)
2. firebase login (one time for your computer)
3. firebase init (one time for each project )
4. npm run build (every time you want to deploy)
5. firebase deploy (every time you want to deploy)
*/ 
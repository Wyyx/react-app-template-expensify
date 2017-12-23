// index.html imports firebase, because fail installing firebase

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export { firebase, googleAuthProvider, database as default }

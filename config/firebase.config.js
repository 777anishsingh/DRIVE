const Firebase = require('firebase-admin')
const serviceAccount = require('../drive-86b9f-firebase-adminsdk-fbsvc-4f97aae87b.json')

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'drive-86b9f.firebasestorage.app'
})

module.exports = Firebase
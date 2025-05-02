const multer = require('multer');
const firebase = require('./firebase.config');
const firebaseStorage = require('multer-firebase-storage');
const serviceAccount = require('../drive-86b9f-firebase-adminsdk-fbsvc-4f97aae87b.json');

const storage = firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName: 'drive-86b9f.firebasestorage.app',
    unique:true
})

const upload = multer({
    storage: storage,
})

module.exports = upload;

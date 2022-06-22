const admin = require('firebase-admin');

var serviceAccount = require("path/to/serviceAccountKey.json");

// Firebase service account page
{
    const type: "service_account",
    const project_id: "adding-authentication-3ef37",
    const private_key_id: ,
    const private_key: "-----BEGIN PRIVATE KEY-----\,
    const client_id: "101808608939773558465",
    const auth_uri: "https://accounts.google.com/o/oauth2/auth",
    const token_uri: "https://oauth2.googleapis.com/token",
    const auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    const client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-z7epf%40adding-authentication-3ef37.iam.gserviceaccount.com"
  }
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  module.exports = admin;
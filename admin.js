const admin = require('firebase-admin');

var serviceAccount = require("path/to/serviceAccountKey.json");

// Firebase service account page
{
    const type: "service_account",
    const project_id: "",
    const private_key_id: ,
    const private_key: "-----BEGIN PRIVATE KEY-----\,
    const client_id: "",
    const auth_uri: "",
    const token_uri: "",
    const auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    const client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-z7epf%40adding-authentication-3ef37.iam.gserviceaccount.com"
  }
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  module.exports = admin;

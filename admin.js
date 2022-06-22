const admin = require('firebase-admin');

var serviceAccount = require("path/to/serviceAccountKey.json");

// Firebase service account page
{
    const type: "service_account",
    const project_id: "adding-authentication-3ef37",
    const private_key_id: "0e2dc9ffb878769266a66e2fc56712236c247fdb",
    const private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYDvCZmQuX3lMl\nazpSBcLsCCzWEYnU0+9a2gWwB18ECd9P41py2S/rOPGJtVpAN5wYNmV33GvNC64v\nT+UYKWNC7Vyk/7AGCNVpA9pcWX6wOHf+sJrzPE9zlOcu2iwATmFQpO/S2ZMUQZ5a\n19BEsgILXE0E0ONwsvWCeRokYHUuy+XKb71zNh0XgGn8Q+Ohq5hjSGJsk4TXxZWF\n3D6TG9pYKkQlk0WvswZJP4RKeh0V4pGexIZHm1AMAU8gATVdHEGMwx2WqqcMPRwR\n3ZeVd+L/YDx8xyD5MdC0IPDKjigtYOSfDjkOMtslvFdj91mNCidMIGTupOpNOQoJ\nWU6QSEYTAgMBAAECggEAR+wlHJm51JMZw+S0mLBV8tupDXYNOigmmlPuhcTuydO7\nlydkFFerZTixcp/feOl0wTUViHyvVrS0JnfFVkjZRQJNpFO2WBxciQgEBFNma4bC\nJys0l2FK+VIQiWYzks+AEyt4rkQwX8/rzW8v+RYzhlkZqvH86kUTgCu01Ej1lHSt\nKHw48I+pAJGYDm1fDV2GL+e2kNje5ytgHxMOAJAhZYOBsdKTgdk/5k/Bu9d+rPON\n8EWSJT+FlFl6HvRU/7js0o2PmRG98HacIsJp7eeUSTgM3dwLnsctYsV4zpcWpmAx\nwsD/WrCp+KknAzbGx8m9Sxk0tRtMPOqVdK/yhngJLQKBgQDQSLITVpm/UxgZM4AR\noK1A3pfWrYPfPccYgcXmu6ov0SwRqf7qSZoRFMbIk0kvHJ0ZtFd6oxzdNYegGd2/\nYsjkzFE2uMq/hCTXp51DbsjabxZTBuMnXHs2U5QYen8dXo4wZzQVwqkW/p2Woqzc\nUvN3qvE5FAmZK70CMI00suD/tQKBgQC65MLG8JFNtO0bQ9yvzbp9abGLnzicZauY\ngkEnhTSDNSPWaibkekEYln1yzx4+onPNrmpurwWoV2CJctMNfcWoucTYLpxWdSZD\nt+FkWPLkRPPFdm2U9Z8YDgyeiTdpZ59Y+7QdcUEgqEXyOW7G40NZ7cLI4cVYdEw3\nF19ZAn/7pwKBgBwpSBJ/SghpVr/Ji85WWDaGIid/jG35r1qr6TMaOpd+g6PbxUCu\nNOuMUJg7+dAp4T/hd1Z4iWWLYEwQU0AWPi1ZRr3MXHVqi4Sw//1nFDccf/s32iyv\nP2WIBWUN4vP4necDfTJYAH7AbFQ6qH6dpJeQgE8EW4vfMw4BvIXcjbllAoGBAJ+6\nYYl7EwRRrA+QWS1ba5ZB3b7RjqWD8zr9n8ex/aZhpUZcJO9CWR41h/O2dkfbuZNB\nDK+aIAC25Mez/hLaujKwyj5k37K4nsJjhlun9bcIAztxMsiLf7QkVb6s0VHhgPug\n61f6ckoB5v3U/gs3MlnKbZ4X7vzhMD4pWJEPJOijAoGAUcj2JZfALMA7V3jforPu\nntSXgvngHry85+axY00f/TBCK/QB6N0HfuOA1g/Ydace+wvSz2IAf9GhM8liDSsg\nUndLe4u2MszVpYxpr3PP/N/QF7ME2sEcQ0uBgb/K0TDvIyXxcpkEQsifs6VVgCKe\n6ozkWxE3BvPJeKF+cQrncRU=\n-----END PRIVATE KEY-----\n",
    const client_email: "firebase-adminsdk-z7epf@adding-authentication-3ef37.iam.gserviceaccount.com",
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
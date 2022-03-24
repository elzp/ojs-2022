const Mailer = require('./mailer.js');
const Push = require('./push-notification.js');
const smsService = require('./sms-service.js');

function send(message) {
    this.sendMessage(message);

}
const sendMail = send.bind(new Mailer());
const sendPush = send.bind(new Push);
const sendSMS = send.bind(smsService);

sendMail('Hello world!');
sendPush('Hello world!');
sendSMS('Hello world!');

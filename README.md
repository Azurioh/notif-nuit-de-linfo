# notif-nuit-de-linfo
 
This project is a bot who will send a mail when the podium of a challenge of the "Nuit de l'info" is available

## Requirements:

- Node.JS
- npm
- A mail server (or a Gmail account)

## Setup the .env file

```
USER=""
PASS=""
RECIPIENTS="adresse@email.fr,"
```
- The USER value is for the email used for the mail server
- The PASS value is the password of the mail server
- The RECIPIENTS value is the people who receive the email. To add many recipients, add the email with a comma at the end. Don't add space between the emails !

## How to start the program:

```
git clone https://github.com/Azurioh/notif-nuit-de-linfo

cd notif-nuit-de-linfo

npm install

npm start
```

[!] *Don't forget to setup the .env file*
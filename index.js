const axios = require('axios');
const cheerio = require('cheerio');
const nodemailer = require('nodemailer');

const url = "https://www.nuitdelinfo.com/inscription/defis/liste?page=3"
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
});

function sendNotification()
{
    const mailOptions = {
        from: process.env.USER,
        to: process.env.RECIPIENTS.split(','),
        subject: "Résultat Nuit de l'info 2023",
        text: `On a enfin les résultats !!!\n\n ${url}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(`Une erreur est survenue lors de l'envoi du mail: ${error}`);
        } else {
            console.log(`Email envoyé avec succès: ${info.response}`);
        }
    });
}

async function checkPage()
{
    try {
        const response = await axios.get(url);
        console.log("Requête effectuée");
        const $ = cheerio.load(response.data);
        console.log("Page chargé en local");
        const podiumUl = $('#podium').first();
        console.log("Balise <ul> trouvé");

        if (podiumUl.find('li').length > 0) {
            console.log("Résultat trouvé !");
            sendNotification();
        } else {
            console.log("Toujours pas de résultat...");
        }
    } catch (err) {
        console.error(`Une erreur est survenue lors de la requête web: ${err}`);
    }
}

checkPage();
setInterval(checkPage, 300000);
require('dotenv').config();

const config = {
    tg : {
        parser : {
            Token: process.env.TELEGRAM_PARSER_TOKEN,
            ChatID: process.env.PARSER_CHAT_ID
        },
        leads : {
            Token: process.env.TELEGRAM_LEADS_TOKEN,
            ChatID: process.env.LEADS_CHAT_ID
        } 
    },
    parser: {
        BaseURl: process.env.baseUrl,
        EndPoint: process.env.parseEndpoint
    },
    server : {
        PORT: process.env.PORT,
        ClientUrl: process.env.CLIENT_URL
    },
    mailer: {
        HostSmtp: process.env.SMTP_HOST,
        PortSmtp: process.env.SMTP_PORT,
        UserSmtp: process.env.SMTP_USER,
        PassSmtp: process.env.SMTP_PASS
    },
    db : {}

}

module.exports = config;
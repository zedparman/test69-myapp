const express = require('express')
const app = express()
const port = 3300
const { google } = require('googleapis');


app.get('/', async (req, res) => {

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    })

    const client = await auth.getClient()

    const googleSheets = google.sheets({version: "v4", auth: client })

const spreadSheetId = "1OnKHYH3ZQ3EkxUpUjdDDqMffRKizhgD5hWnj8Uv0z20"

    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadSheetId,
    })

    res.send(metaData)
})

app.listen(port, () => console.log(`Example app listening on port "http://localhost:3300"`))
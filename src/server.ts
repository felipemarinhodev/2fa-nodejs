import express, { Request, Response } from 'express';

const PORT = 8000;
const app = express();

app.use(express.json())
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Pass to next layer of middleware
  next();
});

app.route('/').get((req: Request, res: Response) => {
  res.send({ message: "SSO MFA"})
})

app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`);
})




// integration_key = DIVCONSBOU9B2A8V58B7
// secret_key = niDpsdGEjiyWSMwyqoxIVezdpWJWOnoCqvwQy0a6

// API_Host = api-69d1d840.duosecurity.com
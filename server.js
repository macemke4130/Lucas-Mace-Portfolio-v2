import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());
app.use(express.json());

app.get('/greeting', function (req, res, next) {
    res.json("Satan");
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`\n\n ❤️ Server listening on port: ${port} ❤️ \n\n`));
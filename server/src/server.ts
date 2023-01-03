import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import router from './routes/router.js'

const PORT = 3000;
const app = express();
const folderPath = dirname(fileURLToPath(import.meta.url))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.resolve(folderPath, '../../client/build')));

  app.get('/', (req, res) =>
    res
      .status(200)
      .sendFile(path.resolve(folderPath, '../../client/build/index.html'))
  );
}

app.use('/', router);

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res) => {
  console.log(err);
  // res.status(500).json(err);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

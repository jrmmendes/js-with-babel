import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

app.use(morgan('dev'))
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  return res
    .status(200)
    .send({ message: 'Hello world' });
});

app.listen(process.env.PORT || 3000, () => console.log('Server started'));

import express, { Request, Response } from 'express';

import userRouter from './api/routes/user.routes';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use(express.json())

app.use("/user", userRouter);

app.get('/testServer', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});
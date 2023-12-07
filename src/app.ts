import express, { Request, Response } from 'express';
import taskRoutes from './routes/taskRoutes';

const app = express();
const port: number = 3000;

app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
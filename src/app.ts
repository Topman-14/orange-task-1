import express, { Request, Response } from 'express';
import taskRoutes from './routes/taskRoutes';

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

const port: number = 3000;

app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
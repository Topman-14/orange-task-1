import express, { Request, Response } from 'express';
import taskRoutes from './routes/taskRoutes';
import axios from 'axios'; // Import axios

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

const port: number = 3000;

app.use('/tasks', taskRoutes);

app.get('/products', async (req: Request, res: Response) => {
  try {
    const response = await axios.get('http://localhost:4000/products');
    const products = response.data;
    res.json(products);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
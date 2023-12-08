import { Request, Response } from 'express';
import prisma from '../db';

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status } = req.body;

    if (!title || !status) {
      return res.status(400).json({ error: 'Title and status are required fields' });
    }

    const task = await prisma.tasks.create({
      data: {
        title,
        description,
        status,
      },
    });


    return res.status(201).json(task);
  } catch (error) {
    console.error('Error creating task:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.tasks.findMany();
    return res.status(200).json(tasks);
  } catch (error) {
    console.error('Error getting tasks:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;

    const task = await prisma.tasks.findUnique({
      where: {
        id: taskId,
      },
    });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    return res.status(200).json(task);
  } catch (error) {
    console.error('Error getting task:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    const { title, description, status } = req.body;

    const existingTask = await prisma.tasks.findUnique({
      where: {
        id: taskId,
      },
    });

    if (!existingTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const updatedTask = await prisma.tasks.update({
      where: {
        id: taskId,
      },
      data: {
        title: title || existingTask.title,
        description: description || existingTask.description,
        status: status || existingTask.status,
      },
    });

    return res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;

    const existingTask = await prisma.tasks.findUnique({
      where: {
        id: taskId,
      },
    });

    if (!existingTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await prisma.tasks.delete({
      where: {
        id: taskId,
      },
    });

    return res.status(200).json({ message: 'task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
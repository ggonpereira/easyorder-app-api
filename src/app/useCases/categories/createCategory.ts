import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { icon, name } = req.body;

    if (!icon) return res.status(400).json('Property icon is required');
    if (!name) return res.status(400).json('Property name is required');

    const category = await Category.create({ icon, name });

    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

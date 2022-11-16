import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;

    await Order.findByIdAndDelete(orderId);

    res.send(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

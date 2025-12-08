import { Request, Response } from 'express';
import * as revRepo from '../repositories/reviewRepository';
import { sendSuccess } from '../utils/response';

export async function listByProduct(req: Request, res: Response) {
  const userId = Number(req.params.userId);
  const items = await revRepo.findReviewsByUser(userId);
  return sendSuccess(res, items, 200);
}

export async function create(req: Request, res: Response) {
  const data = { ...(req.body || {}) };
  const item = await revRepo.createReview(data);
  res.status(201).json(item);
}

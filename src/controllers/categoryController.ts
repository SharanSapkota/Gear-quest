import { Request, Response } from 'express';
import * as catRepo from '../repositories/categoryRepository';
import { sendSuccess } from '../utils/response';

export async function list(req: Request, res: Response) {
  const items = await catRepo.findAllCategories();
  return sendSuccess(res, items, 200);
}

export async function create(req: Request, res: Response) {
  const item = await catRepo.createCategory(req.body);
  return sendSuccess(res, item, 201);
}

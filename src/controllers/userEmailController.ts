import { Request, Response } from 'express';
import * as emailService from '../services/userEmailService';
import { sendSuccess } from '../utils/response';

export async function list(req: Request, res: Response) {
  const userId = Number(req.params.userId || (req as any).user?.id);
  const items = await emailService.listEmails(userId);
  
  return sendSuccess(res, items, 200);
}

export async function create(req: Request, res: Response) {
  const data = { ...(req.body || {}), userId: Number(req.params.userId || (req as any).user?.id) };
  const item = await emailService.createEmail(data);
  res.status(201).json(item);
}

export async function setPrimary(req: Request, res: Response) {
  const id = Number(req.params.id);
  const userId = Number(req.params.userId || (req as any).user?.id);
  await emailService.setPrimary(id, userId);
  res.json({ ok: true });
}

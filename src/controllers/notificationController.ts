import { Request, Response } from 'express';
import * as notifService from '../services/notificationService';
import { sendSuccess } from '../utils/response';

export async function list(req: Request, res: Response) {
  const userId = req.user.id;
  const items = await notifService.listNotifications(userId);
  return sendSuccess(res, items, 200);
}

export async function count(req: Request, res: Response) {
  const userId = req.user.id;
  const count = await notifService.listNotificationCount(userId);
  
  sendSuccess(res, count);
}

export async function markRead(req: Request, res: Response) {
  const id = Number(req.params.id);
  const updated = await notifService.markNotificationRead(id);
  return sendSuccess(res, updated, 200);
}

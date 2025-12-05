import { Request, Response } from 'express';
import * as logService from '../services/activityLogService';
import { sendSuccess } from '../utils/response';

export async function list(req: Request, res: Response) {
  const userId = Number(req.params.userId || (req as any).user?.id);
  const items = await logService.listLogs(userId);
  sendSuccess(res, items, 200);
}

export async function create(req: Request, res: Response) {
  const data = { ...(req.body || {}), userId: Number(req.params.userId || (req as any).user?.id) };
  const item = await logService.createLog(data);
  sendSuccess(res, item);
}

export async function deleteLog(req: Request, res: Response) {
  const id = Number(req.params.id);
  const item = await logService.deleteLogByUser(id);
  return sendSuccess(res, item, 200)
}
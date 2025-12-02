import { Request, Response } from 'express';
import * as mappingService from '../services/permissionMappingService';
import { sendSuccess } from '../utils/response';

export async function listUserPermissions(req: Request, res: Response) {
  const items = await mappingService.listUserPermissions();
  return sendSuccess(res, items, 200);
}

export async function createUserPermission(req: Request, res: Response) {
  const item = await mappingService.createUserPermission(req.body);
  res.status(201).json(item);
}

export async function listRolePermissions(req: Request, res: Response) {
  const items = await mappingService.listRolePermissions();
  
  return sendSuccess(res, items, 200)
}

export async function createRolePermission(req: Request, res: Response) {
  const item = await mappingService.createRolePermission(req.body);
  res.status(201).json(item);
}

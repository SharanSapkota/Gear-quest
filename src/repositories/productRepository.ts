import prisma from '../prisma';

export function findAllProducts() {
  return 
  // return prisma.bike.findMany({ include: { productPrice: true, images: true, ProductAssigned: true } });
}

export function findProductById(id: number) {
  return
  // return prisma.product.findUnique({ where: { id }, include: { productPrice: true, images: true, ProductAssigned: true } });
}

export function createProduct(data: any) {
  return
  // return prisma.product.create({ data, include: { productPrice: true, images: true, ProductAssigned: true } });
}

export function updateProduct(id: number, data: any) {
  return
  // return prisma.product.update({ where: { id }, data, include: { productPrice: true, images: true, ProductAssigned: true } });
}

export function deleteProduct(id: number) {
  return
  // return prisma.product.delete({ where: { id } });
}

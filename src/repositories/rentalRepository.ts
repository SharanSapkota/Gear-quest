import prisma from '../prisma';

export function findAllRentals() {
  return prisma.rental.findMany({ include: { product: true, payer: false } as any });
}

export function findRentalById(id: number) {
  return prisma.rental.findUnique({ where: { id } });
}

export function createRental(data: any) {
  return prisma.rental.create({ data });
}

export function updateRental(id: number, data: any) {
  return prisma.rental.update({ where: { id }, data });
}

export function deleteRental(id: number) {
  return prisma.rental.delete({ where: { id } });
}

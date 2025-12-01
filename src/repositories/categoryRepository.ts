import prisma from '../prisma';

export function findAllCategories() {
  return prisma.category.findMany({
    where: { isActive: true },
    include: {
      subcategories: {
        where: { isActive: true },
      },
    },
  });
}

export function findCategoryById(id: number) {
  return prisma.category.findUnique({ where: { id } });
}

export function createCategory(data: any) {
  return prisma.category.create({ data });
}

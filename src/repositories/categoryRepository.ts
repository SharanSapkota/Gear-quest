import prisma from '../prisma';

export function findAllCategories() {
  return prisma.category.findMany({
    include: {
      subcategories: true,
    },
  });
}

export function findCategoryById(id: number) {
  return prisma.category.findUnique({ where: { id } });
}

export function createCategory(data: any) {
  return prisma.category.create({ data });
}

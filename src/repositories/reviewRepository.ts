import prisma from '../prisma';

export function findReviewsByUser(userId: number) {
  return prisma.review.findMany({ where: { revieweeId: userId } });
}

export function createReview(data: any) {
  return prisma.review.create({ data });
}

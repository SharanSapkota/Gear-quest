const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Categories and Subcategories...');

  const categories = [
    {
      name: "Bikes",
      description: "All types of bikes",
      isActive: true,
      subcategories: [
        { name: "Mountain Bikes", description: "Bikes for mountain trails" },
        { name: "Road Bikes", description: "Bikes for pavement and long rides" },
        { name: "Hybrid Bikes", description: "Combination of road and mountain bikes" },
      ],
    },
    {
      name: "Camping",
      description: "Camping equipment and gear",
      isActive: true,
      subcategories: [
        { name: "Tents", description: "All types of tents" },
        { name: "Sleeping Bags", description: "Sleeping bags for all conditions" },
        { name: "Camp Cooking Gear", description: "Portable cooking equipment" },
        { name: "Camping Chairs", description: "Chairs and seating for camp" },
      ],
    },
    {
      name: "Hiking",
      description: "Hiking gear and accessories",
      isActive: true,
      subcategories: [
        { name: "Backpacks", description: "Hiking backpacks" },
        { name: "Trekking Poles", description: "Poles for long hikes" },
        { name: "Hiking Shoes", description: "Footwear for trails" },
        { name: "Hydration Packs", description: "Water packs for hiking" },
      ],
    },
    {
      name: "Climbing",
      description: "Climbing equipment",
      isActive: true,
      subcategories: [
        { name: "Climbing Ropes", description: "Ropes for climbing" },
        { name: "Carabiners", description: "Climbing connectors" },
        { name: "Harnesses", description: "Safety harnesses" },
        { name: "Climbing Shoes", description: "Specialized climbing footwear" },
      ],
    },
    {
      name: "Survival",
      description: "Survival and emergency gear",
      isActive: true,
      subcategories: [
        { name: "First Aid Kits", description: "Emergency medical kits" },
        { name: "Fire Starters", description: "Tools to start fire" },
        { name: "Emergency Blankets", description: "Thermal blankets" },
        { name: "Water Filters", description: "Portable water filters" },
      ],
    },
    {
      name: "Snow Gear",
      description: "Snow sports and winter gear",
      isActive: true,
      subcategories: [
        { name: "Snowboards", description: "Snowboards for all levels" },
        { name: "Skis", description: "Alpine and cross-country skis" },
        { name: "Snow Boots", description: "Winter boots" },
        { name: "Snow Goggles", description: "Protective eyewear" },
        { name: "Snow Jackets", description: "Winter jackets" },
        { name: "Gloves & Mittens", description: "Hand protection" },
        { name: "Helmets", description: "Head protection" },
      ],
    },
  ];

  // Seed categories and subcategories
  for (const cat of categories) {
    await prisma.category.create({
      data: {
        isActive: cat.isActive,
        description: cat.description,
        subcategories: {
          create: cat.subcategories.map((sub) => ({
            name: sub.name,
            description: sub.description,
            isActive: sub.isActive ?? true,
          })),
        },
      },
    });
  }

  console.log("Categories and Subcategories seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

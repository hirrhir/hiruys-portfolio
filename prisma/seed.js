const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.project.deleteMany();

  await prisma.project.createMany({
    data: [
      {
        title: "Ambrosia",
        description:
          "A restaurant website enabling customers to browse upcoming events, make table reservations, view the menu, and submit feedback — built to give the restaurant an integrated digital presence beyond just a static site.",
        techStack: [],
        images: [],
        order: 0,
      },
      {
        title: "Ambrosia 2.0",
        description:
          "A fullstack restaurant order management platform. Handles the complete order lifecycle with real-time updates, letting staff track and manage orders as they come in without manual coordination.",
        techStack: [],
        images: [],
        order: 1,
      },
      {
        title: "Yourtera",
        description:
          "A queue management system for government services. Users receive a virtual ticket and can track their real-time position in line, with notifications as their turn approaches — removing the need to wait in person.",
        techStack: [],
        images: [],
        order: 2,
      },
    ],
  });

  console.log("Seed complete: 3 projects added.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
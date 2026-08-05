import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";


//create a singleton instance of the PrismaClient to be used throughout the application
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["query", "info", "warn", "error"] : ["error"], 
});

process.on("beforeExit",async () => {
    await prisma.$disconnect();
})

process.on("SIGINT",async () => {
    await prisma.$disconnect();
    process.exit(0);
})

process.on("SIGTERM",async () => {
    await prisma.$disconnect();
    process.exit(0);
})

export default prisma;
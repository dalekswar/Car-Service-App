import { PrismaClient } from "@prisma/client";

// Глобальные области для кэширования клиентов Prisma
const globalForRemote = globalThis as unknown as {
    remotePrisma?: PrismaClient;
};

const globalForLocal = globalThis as unknown as {
    localPrisma?: PrismaClient;
};

// --- Клиент удалённой БД (Railway / Vercel) ---
export const remoteDb =
    globalForRemote.remotePrisma ??
    new PrismaClient({
        datasources: {
            db: {
                url: process.env.DATABASE_URL, // ОБЯЗАТЕЛЬНО установить в Vercel
            },
        },
    });

// --- Клиент локальной БД ---
export const localDb =
    process.env.NODE_ENV === "production"
        ? null
        : globalForLocal.localPrisma ??
        new PrismaClient({
            datasources: {
                db: {
                    url: process.env.LOCAL_DATABASE_URL, // Установить только локально
                },
            },
        });

// Кэширование клиентов в dev
if (process.env.NODE_ENV !== "production") {
    globalForRemote.remotePrisma = remoteDb;
    globalForLocal.localPrisma = localDb!;
}

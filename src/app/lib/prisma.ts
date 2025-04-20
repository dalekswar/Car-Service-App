import { PrismaClient } from "@prisma/client";

// Типы глобальных клиентов
const globalForRemote = globalThis as unknown as {
    remotePrisma?: PrismaClient;
};

const globalForLocal = globalThis as unknown as {
    localPrisma?: PrismaClient;
};

// Основной клиент для Railway
export const remoteDb =
    globalForRemote.remotePrisma ??
    new PrismaClient({
        datasources: {
            db: {
                url: process.env.DATABASE_URL!, // <- добавлен "!" для защиты
            },
        },
    });

// Локальный клиент (на dev-машине)
export const localDb =
    globalForLocal.localPrisma ??
    new PrismaClient({
        datasources: {
            db: {
                url: process.env.LOCAL_DATABASE_URL || "mysql://root:123456789@localhost:3306/centraldb",
            },
        },
    });

// Кэширование клиентов (в dev режиме)
if (process.env.NODE_ENV !== "production") {
    globalForRemote.remotePrisma = remoteDb;
    globalForLocal.localPrisma = localDb;
}

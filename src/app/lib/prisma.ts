// src/lib/prisma.ts
// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForRemote = globalThis as unknown as { remotePrisma?: PrismaClient };
const globalForLocal = globalThis as unknown as { localPrisma?: PrismaClient };

export const remoteDb = globalForRemote.remotePrisma ?? new PrismaClient();
export const localDb = globalForLocal.localPrisma ?? new PrismaClient({
    datasources: {
        db: {
            url: process.env.LOCAL_DATABASE_URL,
        },
    },
});

if (process.env.NODE_ENV !== "production") {
    globalForRemote.remotePrisma = remoteDb;
    globalForLocal.localPrisma = localDb;
}


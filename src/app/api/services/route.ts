// ✅ 1. API route (src/app/api/services/route.ts)
import { NextResponse } from "next/server";
import { remoteDb } from "@/lib/prisma";

export async function GET() {
    try {
        const services = await remoteDb.service.findMany();
        return NextResponse.json(services);
    } catch (err) {
        return NextResponse.json({ error: "Ошибка при получении услуг" }, { status: 500 });
    }
}

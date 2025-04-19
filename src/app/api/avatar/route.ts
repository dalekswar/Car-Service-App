// src/app/api/avatar/route.ts
import { writeFile } from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { remoteDb, localDb } from "@/lib/prisma";

export async function POST(req: NextRequest) {
    const data = await req.formData();
    const file = data.get("avatar") as File;
    const phone = data.get("phone")?.toString();

    if (!file || !phone) {
        return NextResponse.json({ error: "Нет файла или телефона" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = `avatar_${Date.now()}.jpg`;
    const filePath = path.join(process.cwd(), "public", "uploads", fileName);

    await writeFile(filePath, buffer);

    const avatarPath = `/uploads/${fileName}`;

    // Обновим в обеих БД
    await remoteDb.user.update({ where: { phone }, data: { avatar: avatarPath } });
    await localDb.user.update({ where: { phone }, data: { avatar: avatarPath } });

    return NextResponse.json({ avatar: avatarPath });
}

import { writeFile } from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { remoteDb, localDb } from "@/app/lib/prisma";

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

    try {
        await remoteDb.user.update({ where: { phone }, data: { avatar: avatarPath } });
    } catch (err) {
        console.error("Ошибка при обновлении в удалённой БД:", err);
    }

    try {
        await localDb.user.update({ where: { phone }, data: { avatar: avatarPath } });
    } catch (err) {
        console.error("Ошибка при обновлении в локальной БД:", err);
    }

    return NextResponse.json({ avatar: avatarPath });
}

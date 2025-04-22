"use server";

import { remoteDb, localDb } from "@/app/lib/prisma";

async function getRoleIdByName(name: string): Promise<number> {
    const role = await remoteDb.role.findUnique({ where: { name } });
    if (!role) {
        console.error(`❌ Роль "${name}" не найдена`);
        throw new Error(`Роль "${name}" не найдена`);
    }
    return role.id;
}

async function getDefaultRegionId(): Promise<number> {
    const region = await remoteDb.region.findFirst();
    if (!region) {
        console.error("❌ Не найден ни один регион");
        throw new Error("Не найден ни один регион");
    }
    return region.id;
}

export async function saveUserToDatabases(phone: string, roleName: string) {
    try {
        if (!phone || !roleName) {
            console.error("❌ Передан пустой phone или roleName");
            throw new Error("Некорректные данные для регистрации");
        }

        console.log("➡️ Регистрация", { phone, roleName });

        const email = `${phone}@example.com`;
        const roleId = await getRoleIdByName(roleName);
        const regionId = await getDefaultRegionId();

        const userData = {
            name: "Новый пользователь",
            email,
            phone,
            avatar: null,
            regionId,
            created: new Date(),
            createdBy: 1,
            modified: new Date(),
            modifiedBy: 1,
        };

        const databases = [
            { db: remoteDb, label: "Удалённая" },
            { db: localDb, label: "Локальная" },
        ];

        for (const { db, label } of databases) {
            if (!db) {
                console.error(`❌ ${label} база данных не доступна`);
                continue;
            }

            let user = await db.user.findUnique({ where: { phone } });

            if (!user) {
                user = await db.user.create({ data: userData });
                console.log(`✅ ${label}: создан пользователь с ID ${user.id}`);
            } else {
                console.log(`ℹ️ ${label}: пользователь уже существует`);
            }

            await db.userRole.upsert({
                where: { userId_roleId: { userId: user.id, roleId } },
                update: {},
                create: { userId: user.id, roleId },
            });

            if (roleName === "mechanic" || roleName === "manager") {
                const exists = await db.employee.findUnique({
                    where: { userId: user.id },
                });

                if (!exists) {
                    await db.employee.create({
                        data: {
                            userId: user.id,
                            position: roleName === "manager" ? "Менеджер" : "Механик",
                            created: new Date(),
                            createdBy: user.id,
                            modifiedBy: user.id,
                        },
                    });
                    console.log(`👷 ${label}: добавлен в employees`);
                } else {
                    console.log(`👷 ${label}: уже есть в employees`);
                }
            }
        }
    } catch (err) {
        console.error("🔥 Ошибка при сохранении пользователя:", err);
        throw err;
    }
}

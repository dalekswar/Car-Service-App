"use server";

import { remoteDb, localDb } from "@/app/lib/prisma";

// Получить ID роли по имени
async function getRoleIdByName(name: string): Promise<number> {
    const role = await remoteDb.role.findUnique({ where: { name } });
    if (!role) throw new Error(`Роль "${name}" не найдена`);
    return role.id;
}

// Получить ID региона по умолчанию
async function getDefaultRegionId(): Promise<number> {
    const region = await remoteDb.region.findFirst();
    if (!region) throw new Error("Не найден ни один регион.");
    return region.id;
}

export async function saveUserToDatabases(phone: string, roleName: string) {
    try {
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

        // Обе базы: remote и local
        const databases = [
            { db: remoteDb, label: "Удалённая" },
            { db: localDb, label: "Локальная" },
        ];

        for (const { db, label } of databases) {
            let user = await db.user.findUnique({ where: { phone } });

            if (!user) {
                user = await db.user.create({ data: userData });
                console.log(`${label} БД: создан пользователь ${user.id}`);
            }

            // Привязка роли
            await db.userRole.upsert({
                where: { userId_roleId: { userId: user.id, roleId } },
                update: {},
                create: { userId: user.id, roleId },
            });

            // Если роль = mechanic или manager → в employee
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
                    console.log(`${label} БД: добавлен в employees`);
                }
            }
        }
    } catch (err) {
        console.error("Ошибка при сохранении пользователя:", err);
        throw err;
    }
}

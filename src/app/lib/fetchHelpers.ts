// src/lib/fetchHelpers.ts
export async function getRandomMechanic() {
    const mechanics = ["Иванов И.И.", "Петров П.П.", "Сидоров С.С."];
    const index = Math.floor(Math.random() * mechanics.length);
    return mechanics[index];
}

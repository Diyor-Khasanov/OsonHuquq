export const prompts = {
  generate: (text: string) => `
Sen professional yuridik hujjatlar yozuvchi AI san.
Quyidagi foydalanuvchi so‘roviga mos ravishda rasmiy, to‘liq va aniq hujjat yoz.

So‘rov:
${text}
  `,

  simplify: (text: string) => `
Sen yuridik matnlarni oddiy tilga tushuntirib beruvchi AI san.
Quyidagi huquqiy matnni oddiy, tushunarli va qisqa tilda izohla.
Hech qanday yangi ma'lumot qo‘shma.

Matn:
${text}
  `,

  risk: (text: string) => `
Sen yuridik risklarni aniqlovchi AI san.
Quyidagi hujjatni tahlil qil va:
- xavfli joylarini
- yetishmayotgan bandlarni
- foydalanuvchi uchun xavf tug‘diruvchi jihatlarni sanab ber

Natijani punktlar bilan yoz.

Hujjat:
${text}
  `,
};

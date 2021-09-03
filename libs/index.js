export const getDay = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

export const getMonth = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export const convertDate = (date) => {
  const dateNew = new Date(date);
  return `${dateNew.getDate()} ${getMonth[dateNew.getMonth()]} ${dateNew.getFullYear()}`
};

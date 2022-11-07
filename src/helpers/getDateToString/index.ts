const MONTHS = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

export const getDateToString = (
  date = new Date(new Date().setDate(new Date().getDate() - 1))
) => {
  const day = `${date.getDay()}`.padStart(2, "0");
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  return `${day} de ${month} de ${year}`;
};

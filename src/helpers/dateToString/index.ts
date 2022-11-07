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

export const dateToString = (date: string) => {
  const [year, month, day] = date.split("-");

  return `${day} de ${MONTHS[Number(month) - 1]} de ${year}`;
};

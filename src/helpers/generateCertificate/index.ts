import { DataCertificate } from "../../@types/data-certificate";

export const generateCertificate = ({
  name,
  gender,
  city,
  birthday,
  dateOfThePresentation,
  nameFather,
  nameMother,
}: DataCertificate) => {
  if (
    !(
      name &&
      gender &&
      city &&
      birthday &&
      dateOfThePresentation &&
      nameFather &&
      nameMother
    )
  )
    return;

  const queryParams = `?name=${name}&gender=${gender}&city=${city}&birthday=${birthday}&dateOfThePresentation=${dateOfThePresentation}&nameFather=${nameFather}&nameMother=${nameMother}`;

  window.open(
    `./certificate${queryParams}`,
    "_blank",
    "toolbar=yes,scrollbars=yes,resizable=no,width=1368,height=768"
  );
};

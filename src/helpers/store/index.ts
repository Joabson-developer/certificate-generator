import { DataCertificate } from "../../@types/data-certificate";

export const initialData: DataCertificate = {
  name: "",
  gender: "M",
  city: "",
  birthday: "",
  dateOfThePresentation: "",
  nameFather: "",
  nameMother: "",
};

export const store = {
  get(key: string = "certificate"): DataCertificate {
    return JSON.parse(localStorage.getItem(key)!) || initialData;
  },
  set(value: DataCertificate = initialData, key: string = "certificate") {
    localStorage.setItem(key, JSON.stringify(value));
  },
  del(key: string = "certificate") {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};

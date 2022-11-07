import { useLocation } from "react-router-dom";

export const useQuery = () => {
  const { search } = useLocation();
  const urlParams = new URLSearchParams(search);
  return Object.fromEntries(urlParams.entries());
};

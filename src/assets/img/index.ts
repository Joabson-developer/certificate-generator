import Logo from "./logo.png";
import Banner from "./banner.svg";

// female
import F_Baby_1 from "./female/baby-1.png";
import F_Baby_2 from "./female/baby-2.png";
import F_Baby_Carriage from "./female/baby-carriage.png";
import F_Clothing from "./female/clothing.png";
import F_Tag from "./female/tag.png";

// female
import M_Baby_1 from "./male/baby-1.png";
import M_Baby_2 from "./male/baby-2.png";
import M_Baby_Carriage from "./male/baby-carriage.png";
import M_Clothing from "./male/clothing.png";
import M_Tag from "./male/tag.png";

import { Baby } from "../../@types/baby";

const BABY: Baby | any = {
  M: {
    babe_1: M_Baby_1,
    babe_2: M_Baby_2,
    carriage: M_Baby_Carriage,
    clothing: M_Clothing,
    tag: M_Tag,
  },
  F: {
    babe_1: F_Baby_1,
    babe_2: F_Baby_2,
    carriage: F_Baby_Carriage,
    clothing: F_Clothing,
    tag: F_Tag,
  },
};

export { Logo, Banner, BABY };

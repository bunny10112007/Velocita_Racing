import { AddchartOutlined, AddCircleRounded, AddRounded, HomeRounded, SearchRounded } from "@mui/icons-material";

export const menuItems = [
  {
    title: "Home",
    path: "/",
    heading: "home",

    dropdown: [
      {
        title: "Home",
        info: "read about our journey",
        path: "/",
        icon: HomeRounded,
        val: 1,
      },
      {
        title: "Search Item",
        info: "contribute today !",
        path: "/crowdfunding/",
        icon: SearchRounded,
        val: 2,
      },
    ],
  },

  {
    title: "Home",
    path: "/",
    heading: "home",

    dropdown: [
      {
        title: "Add New Item",
        info: "read about our journey",
        path: "/",
        icon: AddCircleRounded,
        val: 3,
      },
      {
        title: "Add Existing Item",
        info: "read about our journey",
        path: "/",
        icon: AddCircleRounded,
        val: 4,
      },
    ],
  },
];

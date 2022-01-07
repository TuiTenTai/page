import HomeIcon from "@mui/icons-material/Home";
import TheatersIcon from "@mui/icons-material/Theaters";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BookIcon from "@mui/icons-material/Book";

export const statusList = ["viewing", "later", "viewed"];
export const typeList = ["anime", "manga", "novel"];
export const itemPerPage = 28;
export const barAction = [
  {
    to: "/",
    icon: <HomeIcon />,
    text: "Home",
  },
  {
    to: "/anime",
    icon: <TheatersIcon />,
    text: "Anime",
  },
  {
    to: "/manga",
    icon: <MenuBookIcon />,
    text: "Manga",
  },
  {
    to: "/novel",
    icon: <BookIcon />,
    text: "Novel",
  },
];

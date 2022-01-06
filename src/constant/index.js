import HomeIcon from "@mui/icons-material/Home";
import TheatersIcon from "@mui/icons-material/Theaters";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";

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
    icon: <ChromeReaderModeIcon />,
    text: "Novel",
  },
];

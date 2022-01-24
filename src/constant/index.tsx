import HomeIcon from '@mui/icons-material/Home';
import TheatersIcon from '@mui/icons-material/Theaters';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookIcon from '@mui/icons-material/Book';

export const statusList: string[] = ['viewing', 'later', 'viewed'];
export const typeList: string[] = ['anime', 'manga', 'novel'];
export const itemPerPage: number = 28;
export const homePageDisplayText: (string | number)[] = [
  'My Anime List',
  1500,
  'My Manga List',
  1500,
  'My Lightnovel List',
  1500,
];

export interface BarAction {
  to: string;
  icon: JSX.Element;
  text: string;
}
export const barActions: BarAction[] = [
  {
    to: '/',
    icon: <HomeIcon />,
    text: 'Home',
  },
  {
    to: '/anime',
    icon: <TheatersIcon />,
    text: 'Anime',
  },
  {
    to: '/manga',
    icon: <MenuBookIcon />,
    text: 'Manga',
  },
  {
    to: '/novel',
    icon: <BookIcon />,
    text: 'Novel',
  },
];

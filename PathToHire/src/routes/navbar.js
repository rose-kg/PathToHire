/** Icons are imported separately to reduce build time */
import BarChartIcon from '@mui/icons-material/BarChart';
import BookOpenIcon from '@mui/icons-material/BookOpenIcon';
import TargetIcon from '@mui/icons-material/TargetIcon';
import TrophyIcon from '@mui/icons-material/TrophyIcon';
import LogOutIcon from '@mui/icons-material/LogOutIcon';
import UserIcon from '@mui/icons-material/UserIcon';

const iconSizes = `h-6 w-6`;
var routes = [
    {
        path: "/app/dashboard",
        name: "Dashboard",
        icon: <BarChartIcon className={iconSizes} />,
    },
    {
        path: "/app/questions",
        name: "Questions",
        icon: <BookOpenIcon className={iconSizes} />,
    },
    {
        path: "/app/practice",
        name: "Practice",
        icon: <TargetIcon className={iconSizes} />,
    },
    {
        path: "/app/mock-interviews",
        name: "Mock Interviews",
        icon: <TrophyIcon className={iconSizes} />,
    },
    {
        path: "/app/analytics",
        name: "Analytics",
        icon: <BarChartIcon className={iconSizes} />,
    },
    {
        path: "/logout",
        name: "Logout",
        icon: <LogOutIcon className={iconSizes} />,
    },
]
export default routes;

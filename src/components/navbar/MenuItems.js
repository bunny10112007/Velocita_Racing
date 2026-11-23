import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import GroupWorkOutlinedIcon from '@mui/icons-material/GroupWorkOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import RadioOutlinedIcon from '@mui/icons-material/RadioOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import TimelineIcon from '@mui/icons-material/Timeline';

export const MenuItems = [

    
    {
    title: 'home',
    path: '/',
    heading: 'home',

    dropdown: [
        { 
                title: 'home',
                info: 'read about our journey',
                path: '/',
                icon: HomeRoundedIcon,

        },
        { 
            title: 'Crowdfunding',
            info: 'contribute today !',
            path: '/crowdfunding/',
            icon: AttachMoneyRoundedIcon,

        }
    ]
    },
    {
        title: 'about',
        path: '',
        heading: 'know more',
    
        dropdown: [
            { 
                title: 'about us',
                info: 'read about our journey',
                path: '/about',
                icon: InfoOutlinedIcon,
    
            },
            { 
                title: 'our team',
                info: 'current season team',
                path: '/our-team/',
                icon: PeopleOutlineIcon,
            },
            { 
                title: 'our history',
                info: 'and results',
                path: '/history/',
                icon: TimelineIcon,
            },
            { 
                title: 'faculty',
                info: 'faculty advisors',
                path: '/faculty/rajeesh-s-msrit',
                icon: SupervisorAccountOutlinedIcon,
            },
            // { 
            //     title: 'Formula Bharat',
            //     info: 'Indian FS Competition',
            //     path: 'https://www.formulabharat.com/',
            //     icon: InfoOutlinedIcon,
            // }
        ]
    },
    {
        title: 'careers',
        path: '',
        heading: 'student careers',
    
        dropdown: [
            { 
                title: 'student careers',
                info: 'career areas at velocita',
                path: '/careers/',
                icon: TrendingUpIcon,
    
            },
            { 
                title: 'recruitment',
                info: 'annual recruitment drive',
                path: '/careers/recruitment/',
                icon: GroupAddIcon,
            },
        ]
    },
    {
        title: 'sponsors',
        path: '/',
        heading: 'partner program',
    
        dropdown: [
            { 
                title: 'partner with us',
                info: 'Sponsor Programs',
                path: '/partner-with-us/',
                icon: LocalAtmOutlinedIcon,
    
            },
            { 
                title: 'Ways to Sponsor',
                info: 'Ways you can sponsor us',
                path: '/partner-with-us/ways-to-sponsor/',
                icon: SavingsRoundedIcon,
            },
            { 
                title: 'our sponsors',
                info: 'sponsors for current season',
                path: '/sponsors/',
                icon: GroupWorkOutlinedIcon,
            },
        ]
    },
    {
        title: 'shop',
        path: '/',
        heading: 'merch and more',
    
        dropdown: [
            { 
                title: 'shop on narkha',
                info: 'official merchandise store',
                path: '/shop/narkha/',
                icon: LocalMallOutlinedIcon,
    
            },
            { 
                title: 'bumper stickers',
                info: 'velocita originals',
                path: '/shop/stickers/',
                icon: ReceiptOutlinedIcon,
            },
    //         { 
    //             title: 'wallpapers',
    //             info: 'for all racing fans',
    //             path: '/shop/wallpapers/',
    //             icon: InsertPhotoOutlinedIcon,
    //         }
        ]
    },
    // {
    //     title: 'more',
    //     path: '/',
    //     heading: 'more from us',
    
    //     dropdown: [
    //         { 
    //             title: 'blog',
    //             info: 'insights from velocita',
    //             path: '/blog/',
    //             icon: BookOutlinedIcon,
    
    //         },
    //         { 
    //             title: 'podcast',
    //             info: 'racing journey podcast',
    //             path: '/podcast/',
    //             icon: RadioOutlinedIcon,
    //         },
    //         { 
    //             title: 'events',
    //             info: 'explore the fun',
    //             path: '/events/',
    //             icon: EventAvailableOutlinedIcon,
    //         }
    //     ]
    // },
    {
        title: 'connect',
        path: '/',
        heading: 'get in touch',
    
        dropdown: [
            { 
                title: 'contact',
                info: 'Reach out to us',
                path: '/connect/contact-us/',
                icon: EventAvailableOutlinedIcon,
            },
            { 
                title: 'newsletter',
                info: 'new every month',
                path: '/connect/newsletter/',
                icon: EventAvailableOutlinedIcon,
            }
        ]
    }
];
import { fade } from '@material-ui/core';

const drawerWidth = 'auto';

export default theme => ({
    root: {
        flexGrow: 1,
        position: 'relative',
    },
    appBar: {
        backgroundColor: '#333',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '95%',
        maxWidth: '1600px',
        margin: '0 auto',
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexDirection: 'column-reverse',
            paddingTop: 10,
        },
        [theme.breakpoints.up('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
        },
        [theme.breakpoints.up('lg')]: {
        },
        [theme.breakpoints.up('xl')]: {
        },
    },
    wrapperSearch: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexDirection: 'column',
        }
    },
    menuButton: {
        marginRight: theme.spacing(5),
        [theme.breakpoints.up('xs')]: {
         margin: 0
        }
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    productNameInput: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        '& .MuiInput-input': {
            color: '#fff',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#fff',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#fff',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        // [theme.breakpoints.up('xs')]: {
        //     display: 'none  ',
        // }
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'baseline',
        },
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            alignItems: 'baseline',
        },
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            alignItems: 'baseline',
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    activeLink: {
        color: '#eeeeee',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});

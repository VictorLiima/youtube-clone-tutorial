import { useRouter } from 'next/dist/client/router';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import HomeIcon from '@material-ui/icons/Home'
import Subscriptions from '@material-ui/icons/Subscriptions'
import Whatshot from '@material-ui/icons/Whatshot'
import VideoLibrary from '@material-ui/icons/VideoLibrary'
import History from '@material-ui/icons/History'
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme)=>({
    mobileDrawer : {
        width: 240,
    },
    desktopDrawer : {
        width: 240,
        top: 56,
        height: 'calc(100% - 64px)',
        borderRight: 'none',
    },
    avatar : {
        cursor: 'pointer',
        width: 24,
        height: 24,
    },
    listItem : {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: theme.spacing(3),
    },
    listItemText: {
        fontSize: 14,
    },
}));

const primaryMenu = [
    { id: 1, label: 'Início', path: '/', icon: HomeIcon },
    { id: 2, label: 'Em alta', path: '/trendding', icon: Whatshot },
    { id: 3, label: 'Inscrições', path: '/subscriptions', icon: Subscriptions },
];
const secondaryMenu = [
    { id: 1, label: 'Biblioteca', icon: VideoLibrary },
    { id: 2, label: 'Histórico', icon: History },
];
    
function NavBar(){
    const classes = useStyles();
    const router = useRouter();

    const isSelected = (item) => {
        return router.pathname === item.path;
    }
    const content = (
        <Box height='100%' display="flex" flexDirection="column">
            <List>
                {primaryMenu.map((item) => {
                    const Icon = item.icon;
                    return (
                        <ListItem
                            key={item.id}
                            button
                            classes={{ root: classes.listItem }}
                            selected={isSelected(item)}
                        >
                        <ListItemIcon>
                            <Icon style={{ color: isSelected(item) && '#f44336' }} />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={item.label}
                        />
                        </ListItem>
                    );
                })}
            </List>
            <Divider/>
            <List>
                {secondaryMenu.map((item) => {
                    const Icon = item.icon;
                    return (
                        <ListItem
                            key={item.id}
                            button
                            classes={{ root: classes.listItem }}
                            selected={isSelected(item)}
                        >
                            <ListItemIcon>
                                <Icon style={{ color: isSelected(item) && '#f44336' }} />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                primary: classes.listItemText,
                                }}
                                primary={item.label}
                            />
                        </ListItem>
                    );
                })}
            </List>
            <Divider/>
            <Box mx={4} my={2}>
                <Typography variant="body2">
                    Faça Login para curtir vídeos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<AccountCircle/>}
                    >
                        Fazer Login
                    </Button>
                </Box>
            </Box>
            <Divider/>
        </Box>
    )
    return(
        <Hidden mdDown>
            <Drawer
                anchor="left"
                classes={{paper: classes.desktopDrawer}}
                open
                variant="persistent"
            >
                {content}
            </Drawer>
        </Hidden>
    )
}

export default NavBar;
"use client"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from "next/link";
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderBar = () => {
    const favoritesList = useSelector((state) => state.favorites.values);
    const total = favoritesList.length;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = typeof window !== "undefined" ? () => window.document.body : undefined;

    return (
        <>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Button sx={{ color: '#fff' }} href={'/'} component={Link}>
                            Search Pokemons
                        </Button>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button sx={{ color: '#fff' }} href={'/favorites'} component={Link} title='Favorites'>
                            <Badge badgeContent={total} color="secondary">
                                <FavoriteIcon />
                            </Badge>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                <List>
                    <ListItem key={1} >
                        <Button color='info' href={'/'} component={Link} fullWidth>
                            <HomeIcon /> Search
                        </Button>
                    </ListItem>
                    <ListItem key={2} >
                        <Button color='info' href={'/favorites'} component={Link} fullWidth>
                            <Badge badgeContent={total} color="secondary">
                                <FavoriteIcon />
                                Favorites
                            </Badge>
                        </Button>
                    </ListItem>
                </List>
                </Box>
            </Drawer>
        </>
    )
}

export default HeaderBar;

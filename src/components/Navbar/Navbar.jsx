import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, IconButton, Badge, InputBase, Typography, Menu, MenuItem, Card, Button } from '@material-ui/core'
import { ShoppingCart, Menu as MenuIcon, Search as SearchIcon, AccountCircle, ArrowBackIos } from '@material-ui/icons'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useStyles from './styles'
import { useHistory, Link, useLocation } from "react-router-dom";
import {useSelector} from 'react-redux'

const outerTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#303030'
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
})



function Navbar({ user }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const [anchorEl, setAnchorEl] = useState(null)
    const [displayState, setDisplayState] = useState('flex')
    const [displayStateMobile, setdisplayStateMobile] = useState('none')
    const totalItems = useSelector(state=>state.cart.totalQuantity)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 600) {
                setdisplayStateMobile('none')
                setDisplayState('flex')
            }
        }
        window.addEventListener('resize', handleResize)

        return (() => window.removeEventListener('resize', handleResize))
    })


    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSearchMobile = (e) => {
        setDisplayState('none')
        setdisplayStateMobile('block')
    }

    const handleSearchClose = () => {
        setdisplayStateMobile('none')
        setDisplayState('flex')
    }

    const handleCartRoute = () => {
        history.push("/cart")
    }

    const menuId = 'primary-search-account-menu';
    const renderUserMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            style={{ top: '2.7%', left: '-1rem' }}
        >
            <Card style={{ height: '200px', width: '200px' }}>

            </Card>
            <MenuItem onClick={handleMenuClose}>
                <Button color="primary" >
                    Profile
                </Button></MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Button color="secondary">
                    Log out
                </Button>
            </MenuItem>
        </Menu>
    );

    const renderLoginMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            style={{ top: '2.7%', left: '-1rem' }}

        >
            <MenuItem onClick={handleMenuClose}>
                <Button color="primary" variant="contained">Sign in</Button>
            </MenuItem>
        </Menu>
    );

    return (
        <ThemeProvider theme={outerTheme}>
            <AppBar position="static" className={classes.root}>
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between', }}>
                    <div className={classes.name} style={{ display: displayState }}>
                        <Typography className={classes.title} variant="h6" noWrap classes={{ root: classes.titleRoot }} component={Link} to="/">
                            Duka Moto
                        </Typography>
                    </div>
                    {
                        location.pathname === "/" && displayState == 'flex' ? <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div> : null
                    }

                    {
                        location.pathname === "/" && displayStateMobile == 'block' ? <div className={classes.searchMobile}>
                            <IconButton className={classes.backIcon} onClick={handleSearchClose}>
                                <ArrowBackIos />
                            </IconButton>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div> : null
                    }


                    <div className={classes.endIcons} style={{ display: displayState }}>
                        {
                            location.pathname === "/" && <IconButton
                                className={classes.mobileSearch}
                                edge="end"
                                aria-label="search items"
                                onClick={handleSearchMobile}
                            >
                                <SearchIcon style={{ color: 'white' }} />
                            </IconButton>
                        }
                        <IconButton aria-label="show 4 items in cart" color="inherit" onClick={handleCartRoute}>
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart classes={{
                                    root: classes.iconRoot
                                }} />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>



                </Toolbar>
            </AppBar>
            {user ? renderUserMenu : renderLoginMenu}
        </ThemeProvider>
    )
}

export default Navbar


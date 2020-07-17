import React from 'react'
import { useSession } from 'next-auth/client'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Menu, MenuItem } from '@material-ui/core'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
  appbar: {
    margin: theme.spacing(0, 0, 2, 0),
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  toolbar: {
    justifyContent: 'space-between',
  }
}))

const MainMenu = () => {
  const router = useRouter()
  const classes = useStyles()
  const [session] = useSession()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };

  const go = (link) => {
    router.push(link)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar color="transparent" className={classes.appbar} position="static">
      <Toolbar className={classes.toolbar}>
        <Button href="/">
          {process.env.site_name}
        </Button>
        <Link href="/">
          Live
        </Link>
        <Link href="/shop">
          Shop
        </Link>
        <Grid>
          {!session && <Button href="/api/auth/signin">Sign in</Button>}
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => go('/golive')}> Go live</MenuItem>
            <MenuItem onClick={() => go('/channels/create')}> Schedule a live</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={() => go('/api/auth/signout')}>Logout</MenuItem>
          </Menu>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default MainMenu
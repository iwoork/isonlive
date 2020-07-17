import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import Webcam from 'react-webcam'
import { Box, Card, Button, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, Typography } from '@material-ui/core'

// Components
import ProductLive from '../components/products/ProductLive'
import ProductList from '../components/products/ProductList'
import AccountPhone from '../components/accounts/AccountPhone'
import AccountProfile from '../components/accounts/AccountProfile'
import FilterPlatform from '../components/filters/FilterPlatform'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  preview: {
    width: '100%',
    padding: theme.spacing(2),
    background: '#f4f4f4',
  },
  queue: {
    margin: theme.spacing(0, 2),
    padding: theme.spacing(2)
  },
  settings: {
    padding: theme.spacing(2, 0)
  },
  button: {
    margin: theme.spacing(0, 3)
  }
}));

export default function Golive() {
  const classes = useStyles()
  const [settings, setSettings] = React.useState({
    live: false,
    phone: true,
    profile: true,
  })
  const products = [
    {
      name: 'Zara bag (brown)',
      price: {
        actual: 100,
        offer: 80,
        currency: 'US$'
      },
      style: {
        background: 'red',
        color: '#fff'
      }
    },
    {
      name: 'Adidas belt',
      price: {
        actual: 20,
        offer: 80,
        currency: 'US$'
      }
    },
    {
      name: 'Nike shoes',
      price: {
        actual: 120,
        offer: 80,
        currency: 'US$'
      }
    }
  ]

  const handleChange = (e) => {
    const field = e.currentTarget.name
    setSettings(prevState => ({
      ...prevState,
      [field]: !prevState[field]
    }))
  }

  return (
    <Container>
      <Grid container>
        <Grid item sm={6}>
          <Card className={classes.preview}>
            <Typography variant="h5" component="h5" gutterBottom>Preview</Typography>
            <Grid container>
              <Grid item sm={7}>
                <Webcam width={320} />
                <Grid container justify="space-between">
                  <FilterPlatform />
                  {settings.live ?
                    <Button className={classes.button} onClick={handleChange} name="live" variant="contained">◾ Go offline</Button>
                    :
                    <Button className={classes.button} onClick={handleChange} variant="contained" name="live" color="primary">► Go live</Button>
                  }
                </Grid>
                <Grid container>
                  <Grid item sm={12}>
                    <Box className={classes.settings}>
                      <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Settings</FormLabel>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox onChange={handleChange} name="phone" checked={settings.phone} />}
                            label="Show phone number"
                          />
                        </FormGroup>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox onChange={handleChange} name="profile" checked={settings.profile} />}
                            label="Show profile information"
                          />
                        </FormGroup>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={5}>
                <>
                  {settings.profile &&
                    <AccountProfile name="Efren Macasaet" live={settings.live} />
                  }
                  {settings.phone &&
                    <AccountPhone number="+14372180111" />
                  }
                  {
                    products &&
                    <ProductLive products={products} />
                  }
                </>
              </Grid>
            </Grid>

          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card className={classes.queue}>
            <Typography variant="h6" component="h6">Products queue</Typography>
            <Typography variant="body1" component="p">List of products you can show on your livestream. You can only show 3 products at any given time.</Typography>
            <ProductList />
          </Card>
        </Grid>
      </Grid>
    </Container >
  );
}

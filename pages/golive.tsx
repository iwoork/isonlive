import React from 'react'
import { FacebookProvider, Comments } from 'react-facebook'
import Webcam from 'react-webcam'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Divider, Box, Card, Button, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, Typography } from '@material-ui/core'

// Components
import ProductLive from '../components/products/ProductLive'
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
    youtube: false,
    facebook: false
  })
  const products = [
    {
      name: 'Zara bag (brown)',
      live: false,
      price: {
        actual: 100,
        offer: 80,
        currency: 'US$'
      },
      style: {
        border: '1px solid green'
      }
    },
    {
      name: 'Adidas belt',
      live: false,
      price: {
        actual: 20,
        offer: 80,
        currency: 'US$'
      }
    },
    {
      name: 'Nike shoes',
      live: false,
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

  const platformSelected = settings.facebook || settings.youtube

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
                  {
                    settings.live ?
                      <Button className={classes.button} onClick={handleChange} name="live" variant="contained">◾ Go offline</Button>
                      :
                      <Button className={classes.button} onClick={handleChange} variant="contained" name="live" color="primary">► Go live</Button>
                  }
                </Grid>
                <Grid container>
                  <Grid item sm={12}>
                    <Box className={classes.settings}>
                      <FormControl component="fieldset">
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
                  <Divider />
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
            <Typography variant="h6" component="h6">Comments</Typography>
            <FacebookProvider appId="896370114217872">
              <Comments href="https://www.facebook.com/Reuters/videos/?ref=page_internal" />
            </FacebookProvider>
          </Card>
        </Grid>
      </Grid>
    </Container >
  );
}

import { useRouter } from 'next/router'
import ImageGallery from 'react-image-gallery'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import 'react-image-gallery/styles/css/image-gallery.css'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  image: {
    maxWidth: '100%'
  },
  user: {
    padding: theme.spacing(1, 0)
  }
}));

const Product = () => {
  const router = useRouter()
  const classes = useStyles()
  const { id } = router.query

  // Dummy data
  const products = [
    {
      name: 'Zara Belt',
      price: {
        original: 200,
        offer: 180,
        currency: '$'
      }
    },
    {
      name: 'GAP T-shirt',
      price: {
        original: 300,
        offer: 180,
        currency: '$'
      }
    },
    {
      name: 'LV Bag',
      price: {
        original: 2000,
        offer: 1800,
        currency: '$'
      }
    }
  ]

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sm={8}>
          <ImageGallery items={images} />
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.user}>
            <Grid container spacing={2}>
              <Grid item sm={2}>
                <Box display="flex" m={1} alignSelf="center">
                  <Avatar alt="Travis Howard" src="https://instagram.fykz1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/106477825_270462120698323_2250492800941455720_n.jpg?_nc_ht=instagram.fykz1-1.fna.fbcdn.net&_nc_ohc=TBpKlDN5S5MAX9eoegv&oh=07324a40025bdf23241b60298cf76355&oe=5F291624" />
                </Box>
              </Grid>
              <Grid item sm={10}>
                <Box className={classes.user}>
                  <Typography variant="h6">Efren Macasaet</Typography>
                  <Typography variant="subtitle2">2M subscribers</Typography>
                  <Typography variant="subtitle2">Tech, Fashion</Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>
          <h3>Product Reviews</h3>
          <List className={classes.products}>
            {products.map((product) => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src="/play-dummy.png" />
                </ListItemAvatar>
                <ListItemText primary="Efren Macasaet" secondary="25M subscribers" />
                <Button variant="contained" color="primary">Watch</Button>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  )

}

export default Product
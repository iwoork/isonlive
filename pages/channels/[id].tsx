import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import LabelIcon from '@material-ui/icons/Label'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  image: {
    maxWidth: '100%'
  },
}));

const Stream = () => {
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

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sm={8}>
          <iframe width="100%" height="480" src="https://www.youtube.com/embed/UqFzfqlb60g?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                <h3>Efren Macasaet</h3>
                <p>2M subscribers</p>
                <p><LabelIcon /> Tech, Fashion</p>
              </Grid>
            </Grid>
          </Card>
          <h3>Products</h3>
          <List className={classes.products}>
            {products.map((product) => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={product.name} secondary={product.price.currency + '' + product.price.offer} />
                <Button variant="contained" color="primary">Buy</Button>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  )

}

export default Stream
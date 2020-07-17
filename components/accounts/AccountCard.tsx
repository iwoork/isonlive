import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const AccountCard: React.FC<{ name: string }> = ({ name }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea href="/channels/1">
        <CardMedia
          className={classes.media}
          image="/play-dummy.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Influencer {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
              </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default AccountCard
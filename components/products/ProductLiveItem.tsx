import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Card, Grid, Typography, Button } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0)
  },
  name: {
    fontWeight: 'bold'
  }
}));

const ProductLiveItem = ({ product }) => {
  const classes = useStyles()

  const [live, setLive] = React.useState(false)

  const handleClick = () => {
    setLive(!live)
  }

  return (
    <Card className={classes.root}>
      <Grid container justify="space-between">
        <Grid item sm={8}>
          <Typography className={classes.name}>{product.name}</Typography>
          <Typography>{product.price.currency} {product.price.actual}</Typography>
        </Grid>
        <Grid item sm={4}>
          {
            live ?
              <Button onClick={handleClick} variant="contained" color="primary" size="small"><VisibilityIcon /></Button>
              :
              <Button onClick={handleClick} variant="outlined" size="small"><VisibilityOffIcon /></Button>
          }
        </Grid>
      </Grid>
    </Card>
  )
}

export default ProductLiveItem
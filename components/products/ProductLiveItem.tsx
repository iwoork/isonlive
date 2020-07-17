import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Card, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0)
  }
}));

const ProductLiveItem = ({ product }) => {
  const classes = useStyles()

  return (
    <Card style={product.style} className={classes.root}>
      <Typography>{product.name}</Typography>
      <Typography>{product.price.currency} {product.price.actual}</Typography>
    </Card>
  )
}

export default ProductLiveItem
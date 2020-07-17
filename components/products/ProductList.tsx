import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import ProductListItem from '../products/ProductListItem'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0)
  },
  media: {
    height: 140,
  },
}));

const ProductList = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item sm={12}>
        {Array(6).fill().map((_, i) => (
          <ProductListItem />
        ))}
      </Grid>
    </Grid>
  )
}

export default ProductList
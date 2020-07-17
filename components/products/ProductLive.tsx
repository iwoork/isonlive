import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import ProductLiveItem from '../products/ProductLiveItem'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0)
  },
}));

const ProductLive = ({ products }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container>
      <Grid item sm={12}>
        {products.map((product) =>
          <ProductLiveItem product={product} />
        )}
      </Grid>
    </Grid>
  )
}

export default ProductLive
import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0)
  }
}));

const ProductListItem = () => {
  const classes = useStyles()

  return (
    <Grid container justify="space-between" className={classes.root}>
      <Grid item>
        <Typography>Product</Typography>
        <Typography>$100</Typography>

      </Grid>
      <Grid item>
        <Button variant="contained" size="small">Edit</Button>
        <Button variant="contained" size="small" color="primary">Show</Button>
      </Grid>
    </Grid>
  )
}

export default ProductListItem
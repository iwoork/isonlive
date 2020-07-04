import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import ProductCard from '../components/products/ProductCard'
import FilterCategory from '../components/filters/FilterCategory'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function Shop() {
  const classes = useStyles()

  const handleChange = (e) => {
    console.log(e)
  }

  return (
    <Container>
      <Grid container>
        <Grid item sm={2}>
          <FilterCategory />
        </Grid>
        <Grid item sm={10}>
          <Grid container spacing={2}>
            {Array(8).fill().map((_, i) => (
              <Grid item sm={3}>
                <ProductCard />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

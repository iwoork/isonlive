import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { TextField, Paper, Box, Grid, Typography, Button } from '@material-ui/core';
import FilterPlatform from '../../components/filters/FilterPlatform';
import FilterCategory from '../../components/filters/FilterCategory';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '95%',
    },
  },
  form: {
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  }
}));

const Create = () => {
  const router = useRouter()
  const classes = useStyles()
  const { id } = router.query

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item sm={12}>
          <Paper className={classes.form}>
            <Typography variant="h5" component="h5">Stream information</Typography>
            <Box>
              <TextField variant="outlined" id="standard-basic" label="Date and time of stream" />
            </Box>
            <Grid container>
              <Grid item sm={4}>
                <FilterPlatform />
              </Grid>
              <Grid item sm={4}>
                <FilterCategory />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={3}>
          <Paper className={classes.form}>
            <Typography variant="h6" component="h6">Product information</Typography>
            <Box>
              <TextField variant="outlined" id="standard-basic" label="Product name" />
            </Box>
            <Box>
              <TextField variant="outlined" id="standard-basic" label="Product link" />
            </Box>
            <Box>
              <TextField variant="outlined" id="standard-basic" label="Actual price" />
            </Box>
            <Box>
              <TextField variant="outlined" id="standard-basic" label="Offer price" />
            </Box>
            <Button variant="contained">Add</Button>
          </Paper>
        </Grid>
      </Grid>
      <Grid container alignItems="flex-end" justify="flex-end">
        <Button variant="contained" color="primary">Save</Button>
      </Grid>
    </Container>
  )

}

export default Create
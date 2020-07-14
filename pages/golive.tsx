import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import Webcam from 'react-webcam'
import { Button, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

}));

export default function Golive() {
  const classes = useStyles()

  const handleChange = (e) => {
    console.log(e)
  }

  return (
    <Container>
      <Grid container>
        <Grid item sm={6}>
          <Webcam />
        </Grid>
        <Grid item sm={6}>
          <Grid container direction="row">
            <Grid item>
              <Button variant="contained" color="primary">Go live</Button>
            </Grid>
            <Grid item>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Settings</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox onChange={handleChange} name="gilad" />}
                    label="Show phone number"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

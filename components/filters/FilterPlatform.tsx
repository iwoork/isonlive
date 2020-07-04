import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const FilterPlatform = () => {
  const classes = useStyles()

  const handleChange = (e) => {
    console.log(e)
  }

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Platform</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onChange={handleChange} name="gilad" />}
          label="Facebook Live"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleChange} name="jason" />}
          label="YouTube Live"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleChange} name="antoine" />}
          label="Twitch TV"
        />
      </FormGroup>
    </FormControl>
  )
}

export default FilterPlatform
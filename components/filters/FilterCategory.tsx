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
  }
}));

const FilterCategory = () => {
  const classes = useStyles()

  const handleChange = () => {
  }

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Category</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onChange={handleChange} name="gilad" />}
          label="Fashion"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleChange} name="jason" />}
          label="Tech"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleChange} name="antoine" />}
          label="Travel"
        />
      </FormGroup>
    </FormControl>
  )
}

export default FilterCategory
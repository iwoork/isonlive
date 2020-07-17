import React from 'react'

import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const FilterCategory = () => {
  const handleChange = () => {
  }

  return (
    <FormControl component="fieldset">
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
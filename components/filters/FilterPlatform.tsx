import React from 'react'

import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const FilterPlatform = () => {

  const handleChange = () => {
  }

  return (
    <FormControl component="fieldset">
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
      </FormGroup>
    </FormControl>
  )
}

export default FilterPlatform
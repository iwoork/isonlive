import React from 'react'

import { makeStyles } from '@material-ui/core/styles'


import { Card, Typography } from '@material-ui/core'
import theme from '../../src/theme';

const useStyles = makeStyles(() => ({
  root: {
    padding: theme.spacing(1),
    width: '100%'
  },
  text: {
    fontSize: 12
  }
}));

const AccountPhone: React.FC<{ number: string }> = ({ number }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Typography className={classes.text}>
        Contact: {number}
      </Typography>
    </Card>
  )
}

export default AccountPhone
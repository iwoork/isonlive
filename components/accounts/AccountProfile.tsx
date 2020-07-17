import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, Typography } from '@material-ui/core'

import theme from '../../src/theme';

const useStyles = makeStyles(() => ({
  root: {
    margin: theme.spacing(1, 0),
    padding: theme.spacing(1),
    width: '100%'
  },
  text: {
    fontSize: 12
  }
}));

const AccountProfile: React.FC<{ name: string, live: boolean }> = ({ name, live }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Grid container justify="space-between">
        <Grid item>
          <Typography className={classes.text}>
            {name}
          </Typography>
          <Typography className={classes.text}>
            2M subscribers
          </Typography>
        </Grid>
        <Grid item>
          {live &&
            <Typography className={classes.text} color="primary">► Live now!</Typography>
          }
        </Grid>
      </Grid>
    </Card>
  )
}

export default AccountProfile
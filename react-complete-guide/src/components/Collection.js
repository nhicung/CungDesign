import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import tileData from './title.js';
import GridTile from './GridTile.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    // height: '50%',
  },
}));

export default function Collection() {
  
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}cols={2.5}>
        {tileData.map((tile) => (
          <GridTile
          tile={tile}
          />
        ))}
      </GridList>
    </div>
  );
}
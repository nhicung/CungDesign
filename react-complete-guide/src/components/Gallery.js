import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import tileData from './title';
import GridTile from './GridTile.js';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 150,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 550,
  },
  
  
}));

export default function Gallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={25} className={classes.gridList} cols={2}>
        {tileData.map((tile) => (
          <GridTile
          tile={tile}
          />
        ))}
      </GridList>
    </div>
  );
}
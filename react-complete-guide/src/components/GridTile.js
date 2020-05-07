import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
    // root: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   justifyContent: 'space-around',
    //   overflow: 'hidden',
    //   backgroundColor: theme.palette.background.paper,
    // },
    // gridList: {
    //   flexWrap: 'nowrap',
    //   // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    //   transform: 'translateZ(0)',
    // },
    root: {
        height: '30%',
        width: '50%',
    },

    title: {
      color: 'white',
    },

    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },

    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    paper: {
      backgroundColor: theme.palette.background.paper,
      // border: '2px solid #000',
      // boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default function GridTile(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };


    return (
        <GridListTile key={props.tile.img}
        classes={{
            root: classes.root,
        }}
        >
            <img src={props.tile.img} alt={props.tile.title} onClick={handleOpen}/>
            <GridListTileBar
            title={props.tile.title}
            
            actionIcon={
                <IconButton aria-label={`star ${props.tile.title}`}>
                <StarBorderIcon className={classes.title} />
                </IconButton>
            } />
            <Modal
                aria-labelledby="transition-modal-title"
                // aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    {/* {tileData.map((title) => (
                    <div key={title.img}> */}
                    < img src={props.tile.img} alt={props.tile.title} width="600px" height="400px"id="transition-modal-title"/>
                    {/* </div>))} */}
                </div>
                </Fade>
            </Modal>
        </GridListTile>
    )
}
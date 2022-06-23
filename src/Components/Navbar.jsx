import { AppBar, makeStyles,Toolbar,Typography,InputBase,alpha } from '@material-ui/core';
import { Search } from '@material-ui/icons';


// import { findByLabelText } from '@testing-library/react';



const useStyles = makeStyles((theme) => ({
    toolbar:{
        display: 'flex',
        justifyContent: 'flex-end',
    },
    logoLg: {
        display: 'none',
        [theme.breakpoints.up('sm')]:{
            display: 'block'
        }
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(1),
    }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
       <Toolbar className={classes.toolbar}>
         <Typography variant="h6" className= {classes.logoLg} >
           
         </Typography>
         <div className={classes.search}>
             <Search/>
             <InputBase placeholder='Search...' className={classes.input}/>
         </div>
       </Toolbar>
    </AppBar>
  );
}

export default Navbar ;
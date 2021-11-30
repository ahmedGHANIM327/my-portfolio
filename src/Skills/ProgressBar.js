import LinearProgress from '@mui/material/LinearProgress';
import { withStyles } from '@mui/styles';
import { useEffect,useState } from 'react';

const styles = {
    root: {
      height: 17,
      borderRadius : '10px',
      backgroundColor:'rgba(39,44,96,0.3)',
      color : 'rgb(39,44,96)',
      border : '1px solid rgb(39,44,96)',
      '& span': {
        backgroundColor : 'rgb(39,44,96)'
      }
    },
};

function ProgressBar(props ) {
    const { classes , valueProgress} = props;

    /**/ 
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= valueProgress ? valueProgress : prevProgress + 15));
        }, 500);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <LinearProgress className={classes.root} variant="determinate" value={progress} />
    );
}

  
export default withStyles(styles)(ProgressBar);
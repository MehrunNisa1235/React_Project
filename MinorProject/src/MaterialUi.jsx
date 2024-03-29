import Button from '@mui/material/Button';

//for adding delete icon
import DeleteIcon from '@mui/icons-material/Delete';
//for using send icon
import SendIcon from '@mui/icons-material/Send';
//for using alarm icon or another icon easily
import IconButton from '@mui/material/IconButton'; //this is main icon import link 
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fingerprint from '@mui/icons-material/Fingerprint';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
   


export default function MaterialUi()
{
    return(
        <>
            <h2>Material UI</h2><br />


            <Button size='small' variant="contained" color='error'>Contained</Button>
            <Button size='large' varient="outlined">Primary</Button><br />
            <Button disabled>Disabled</Button><br />
            <Button color="success" variant='outlined'>Click me !!</Button><br />
            <Button  varient="contained" color='error' >Dont Click here</Button><br />

            <h4>Button with Icons</h4>
            <Button varient="contained" startIcon={<DeleteIcon />} >Delete</Button><br />
            <Button varient="contained" size='large' endIcon={<SendIcon />} ></Button><br />

        
            {/* we can directly import the IconButton link and easily add different icons like  */}
        
            <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
            </IconButton>

            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton><br />

            <h3>FingerPrint Icons</h3>
            {/* fingerPrint Icon :  first import IconButton link then import fingerprint */}
            <IconButton aria-label="fingerprint" color="success">
                <Fingerprint />
             </IconButton>

             <IconButton aria-label="fingerprint" color="primary">
                <Fingerprint />
             </IconButton><br />

             <h3>Upload File Icon</h3>
             <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
                Upload file
             </Button><br />

            

        </>
    )
}
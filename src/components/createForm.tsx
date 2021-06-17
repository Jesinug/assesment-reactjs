import { useForm } from "react-hook-form";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

type userForm = {
  name: string;
  lastname: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export default useForm = () => {
  return (
    <form className={classes.root} noValidate autoComplete="off">
    <TextField name="name" id="name" label="Name" variant="outlined" onChange={handleChange}/>
    <TextField name="lastname" id="lastname" label="Lastname" variant="outlined" onChange={handleChange}/>
    <Button variant="contained" color="primary">Create</Button>
    </form>
  )
};






/*
<form className={classes.root} noValidate autoComplete="off">
<TextField name="name" id="name" label="Name" variant="outlined" onChange={handleChange}/>
<TextField name="lastname" id="lastname" label="Lastname" variant="outlined" onChange={handleChange}/>
<Button variant="contained" color="primary">Create</Button>
</form>
*/
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import userForm from './components/createForm';



const USERS: User[] = [
  {
    name: 'Santiago',
    lastname: 'Kiryluk Maclean',
  },
  {
    name: 'Nicolai',
    lastname: 'Kiryluk Nugnez' 
  },
  {
    name: 'Sebastian',
    lastname: 'Nugnez' 
  },
  {
    name: 'Jordi',
    lastname: 'Sanchez Mir' 
  },
  {
    name: 'Sofia',
    lastname: 'Lee' 
  }
]

interface User {
  name: string;
  lastname: string;
}

function App() {
  const [filter, setFilter] = useState('')
  const renderUsers = () => {
    return USERS.filter((user) => {
      return user.name.includes(filter) || user.lastname.includes(filter)
    })
    .map((user) => {
      return (
      <ListItem key={user.name} onClick={() => clickUser(user.name, user.lastname)} >
      <ListItemText primary={`${user.name} ${user.lastname}`} />
      </ListItem>
      )
    }
  )
  }
  const clickUser = (name: any, lastname: any) => {
    alert(`${name} ${lastname}`)
  }
  const changeTextField = (event: any) => {
    setFilter(event.target.value)
  }
  return (
    <div className="App">
       <TextField id="filter" label="Filter" placeholder="Search" onChange={changeTextField} />
      <List component="nav">
     {renderUsers()}
     </List>
     <userForm></userForm>
    </div>
  );
}

export default App;

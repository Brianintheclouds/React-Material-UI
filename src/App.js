import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ButtomAppBar from './components/ButtomAppBar';

import CenteredGrid from './components/CenteredGrid';

import MediaCard from './components/MediaCard';





function App() {
  return (
   <div>
     <ButtomAppBar />
     <CenteredGrid />
     <MediaCard />
     <MediaCard />
     <MediaCard />
   </div>
 );
}

export default App;

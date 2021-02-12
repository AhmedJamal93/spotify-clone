import React, { useState } from 'react';
import './Navbar.css';
import NavbarOption from './NavbarOption/NavbarOption';
import NavbarPlaylist from './NavbarPlaylist/NavbarPlaylist';
import NavbarAddPlaylist from './NavbarAddPlaylist/NavbarAddPlaylist';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import RadioIcon from '@material-ui/icons/Radio';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Navbar({handleNavbarChange, navbarActive, id, libraries}) {

    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [playlists, setPlaylists] = useState(libraries)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleCreate = async() => {
        const newLibrary = {
            id:id,
            title:title
        }
        setOpen(false)

        await axios.post('http://localhost:5000/users/library/:id', newLibrary)

        axios.get('http://localhost:5000/users/library/:id', {params:{id:id}})
        .then(res => {
            console.log(res)
            setPlaylists(res.data.rows)
            console.log(playlists)
        })

        
    }

    return (
        <div className="navbar">
            <div className="navbar__options">
                <NavbarOption 
                    index={0}
                    handleNavbarChange={handleNavbarChange}
                    navbarActive={navbarActive}
                    className="home"
                    title="Home"
                    Icon={HomeIcon}/>
                <NavbarOption
                    index={1} 
                    handleNavbarChange={handleNavbarChange}
                    navbarActive={navbarActive}
                    title="Browse"
                    Icon={ListIcon}/>
                <NavbarOption
                    index={2} 
                    handleNavbarChange={handleNavbarChange}
                    navbarActive={navbarActive}
                    title="Radio"
                    Icon={RadioIcon}/>
            </div>
            <div className="navbar__playlists">
                <NavbarPlaylist 
                    handleNavbarChange={handleNavbarChange}
                    navbarActive={navbarActive}
                    playlists={playlists}
                    libraries={libraries}
                    id={id}
                    />
            </div>
            <div className="navbarPlaylists__add" onClick={handleClickOpen}>
                <NavbarAddPlaylist
                    Icon={AddCircleOutlineIcon} 
                    />
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New Playlist</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Create a new Playlist of songs that you enjoy
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        onChange={e => setTitle(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="description"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCreate} color="primary">
                        Create
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Navbar

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
        <List>
            <ListItem button key='Home'>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary='Home' />
            </ListItem>
            <ListItem button key='Add product'>
                <ListItemIcon><AddIcon /></ListItemIcon>
                <ListItemText primary='Add product' />
            </ListItem>
        </List>
        </Box>
    );

  return (
    <div>
        <Button onClick={toggleDrawer(true)}>left</Button>
        <Drawer
            anchor='left'
            open={open}
            onClose={toggleDrawer(false)}
        >
            {list()}
        </Drawer>
    </div>
  );
}
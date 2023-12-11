import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Menu, MenuItem } from '@mui/material';
import { useQueryVerPerros } from '../../Queries/queryVerPerros';

function Navbar() {
  const { data: perros, isLoading, isError } = useQueryVerPerros();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePerrosClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePerroClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="error">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tinder Perros
        </Typography>
        <Button
          color="inherit"
          aria-controls="perros-menu"
          aria-haspopup="true"
          onMouseOver={handlePerrosClick}
        >
          Perros
        </Button>
        <Menu
          id="perros-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handlePerroClose}
        >
          {isLoading && <MenuItem disabled>Cargando...</MenuItem>}
          {isError && <MenuItem disabled>Error al cargar perros</MenuItem>}
          {perros &&
            perros.map((perro) => (
              <MenuItem
                key={perro.id}
                component={Link}
                to={`/VerPerro/${perro.id}`}
                onClick={handlePerroClose}
              >
                {perro.nombre}
              </MenuItem>
            ))}
        </Menu>
        {/* Resto de tus botones... */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
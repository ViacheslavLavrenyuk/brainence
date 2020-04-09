import React, { useState } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Form from './Form/Form';
import ProductList from './ProductList/ProductList';
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const App = ({ products }) => {
  const [query, setQuery] = useState('');
  const classes = useStyles();

  const filterQuery = (event) => {
    const searchItem = event.target.value;

    setQuery(searchItem);
  };

  const filtredProducts = products.filter(
    product => product.name.toLowerCase().includes(query.toLowerCase())
      || product.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            List of products
          </Typography>
          <div
            className={classes.search}
            value={query}
            onChange={filterQuery}
          >
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <div className="app">
        <Form />
        {
          products.length
            ? (
              <>
                <p className="text">
                  To pin a product, click on the product name
                </p>
                <ProductList
                  products={filtredProducts}
                />
              </>
            )
            : (
              <p className="text">No products</p>
            )
        }
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(App);

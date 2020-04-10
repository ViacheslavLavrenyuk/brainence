import React, { useState } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import PropTypes from 'prop-types';
import { useStyles } from './useStyles';
import Form from './components/Form/Form';
import ProductList from './components/ProductList/ProductList';
import './App.css';

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

App.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};

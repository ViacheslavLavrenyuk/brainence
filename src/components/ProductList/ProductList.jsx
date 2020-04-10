import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { StyledTableCell } from '../../StyledTableCell';
import Product from '../Product/Product';
import './ProductList.css';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ProductList = (props) => {
  const { products } = props;
  const classes = useStyles();

  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Image</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center" />
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <Product
                product={product}
                key={product.id}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default connect()(ProductList);

ProductList.propTypes = {
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

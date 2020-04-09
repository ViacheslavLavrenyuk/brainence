import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { removeProduct, pinProduct } from '../actionCreators';
import './Product.css';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const Product = ({
  product,
  onRemoveProduct,
  onPinProduct,
}) => {
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row" align="center">
        <img src={product.image} alt={product.name} className="image" />
      </StyledTableCell>
      <StyledTableCell align="center">
        <button
          type="button"
          className="product__button product__button-remove"
          onClick={() => onPinProduct(product.id)}
        >
          {product.name}
        </button>
      </StyledTableCell>
      <StyledTableCell align="left">{product.description}</StyledTableCell>
      <StyledTableCell align="center">{product.price}</StyledTableCell>
      <StyledTableCell align="center">
        <button
          type="button"
          className="product__button product__button-remove"
          onClick={() => onRemoveProduct(product.id)}
        >
          Remove
        </button>
      </StyledTableCell>
    </StyledTableRow>
  );
};

const mapDispatchToProps = ({
  onRemoveProduct: removeProduct,
  onPinProduct: pinProduct,
});

export default connect(null, mapDispatchToProps)(Product);

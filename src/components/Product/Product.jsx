import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import { StyledTableCell } from '../../StyledTableCell';
import { removeProduct, pinProduct } from '../../actionCreators';
import './Product.css';

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
}) => (
  <StyledTableRow>
    <StyledTableCell
      component="th"
      scope="row"
      align="center"
    >
      <img
        src={product.image}
        alt={product.name}
        className="image"
      />
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

const mapDispatchToProps = ({
  onRemoveProduct: removeProduct,
  onPinProduct: pinProduct,
});

export default connect(null, mapDispatchToProps)(Product);

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onRemoveProduct: PropTypes.func.isRequired,
  onPinProduct: PropTypes.func.isRequired,
};

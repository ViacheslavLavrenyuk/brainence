import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import uuid from 'react-uuid';
import { addProduct } from '../actionCreators';
import './Form.css';

const Form = ({ onAddProduct }) => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleInputProductImage = ({ target }) => {
    const { value } = target;

    setImage(value);
  };

  const handleInputProductName = ({ target }) => {
    const { value } = target;

    setName(value);
  };

  const handleInputProductDescription = ({ target }) => {
    const { value } = target;

    setDescription(value);
  };

  const handleInputProductPrice = ({ target }) => {
    const { value } = target;

    setPrice(value);
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    onAddProduct({
      id: uuid(),
      image,
      name,
      description,
      price,
    });
    setImage('');
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <>
      <form onSubmit={handleAddProduct} className="form">
        <TextField
          label="URL of image"
          variant="outlined"
          className="input"
          value={image}
          onChange={handleInputProductImage}
        />
        <TextField
          required
          label="Name"
          variant="outlined"
          className="input"
          value={name}
          onChange={handleInputProductName}
        />
        <TextField
          required
          label="Description"
          variant="outlined"
          className="input"
          value={description}
          onChange={handleInputProductDescription}
        />
        <TextField
          required
          label="Price"
          variant="outlined"
          className="input"
          value={price}
          onChange={handleInputProductPrice}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="button"
        >
          Add product
        </Button>
      </form>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  onAddProduct: product => dispatch(addProduct(product)),
});

export default connect(null, mapDispatchToProps)(Form);

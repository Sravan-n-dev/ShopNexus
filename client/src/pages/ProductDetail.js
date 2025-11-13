import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch product details');
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setSuccessMessage('Product added to cart!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  if (loading) {
    return <div className="loading">Loading product...</div>;
  }

  if (error || !product) {
    return <div className="error">{error || 'Product not found'}</div>;
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {successMessage && <div className="success">{successMessage}</div>}
      
      <button onClick={() => navigate('/')} className="btn btn-secondary" style={{ marginBottom: '20px' }}>
        ← Back to Products
      </button>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '40px',
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px'
      }}>
        <div>
          <img 
            src={product.image || 'https://via.placeholder.com/400'} 
            alt={product.name}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>

        <div>
          <h1>{product.name}</h1>
          <p className="price" style={{ fontSize: '32px', margin: '20px 0' }}>
            ${product.price.toFixed(2)}
          </p>
          
          <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
            {product.description}
          </p>

          <p style={{ marginBottom: '20px' }}>
            <strong>Category:</strong> {product.category}
          </p>

          <p style={{ marginBottom: '20px' }}>
            <strong>Stock:</strong> {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
          </p>

          {product.stock > 0 && (
            <>
              <div style={{ marginBottom: '20px' }}>
                <label><strong>Quantity:</strong></label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="btn btn-secondary"
                  >
                    -
                  </button>
                  <span style={{ fontSize: '20px', minWidth: '40px', textAlign: 'center' }}>
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="btn btn-secondary"
                  >
                    +
                  </button>
                </div>
              </div>

              <button 
                onClick={handleAddToCart}
                className="btn btn-primary"
                style={{ width: '100%', padding: '15px', fontSize: '18px' }}
              >
                Add to Cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

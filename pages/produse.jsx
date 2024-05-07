import React, { useState } from 'react';
import axios from 'axios'; 

export default function Produse() {
  const [products, setProducts] = useState([]); 

  const getProducts = async () => {
    try {
      const response = await axios.get('/api/produse'); 
      if (response.data && Array.isArray(response.data.data)) {
        setProducts(response.data.data); 
      } else {
        console.error('Datele primite de la API nu sunt în formatul corect.');
      }
    } catch (error) {
      console.error('Eroare la obținerea produselor:', error);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Produsele "Apolodor"</h1>
        <button onClick={getProducts} className="btn">Apasă aici pentru a afișa produsele</button>
      </header>
      <section className="section">
        <h2>Produse</h2>
        <table className="produse-table">
          <thead>
            <tr>
              <th>Nume</th>
              <th>Categorie</th>
              <th>Preț (lei)</th>
              <th>Stoc</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id}>
                <td>{product.nume}</td>
                <td>{product.categorie}</td>
                <td>{product.preț}</td>
                <td>{product.stoc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import axios from 'axios'; 

export default function Produse() {
  const [products, setProducts] = useState([]); 
  const [newProduct, setNewProduct] = useState({ nume: '', categorie: '', preț: 0 }); 
  const [editingProductId, setEditingProductId] = useState(null); 

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

  const addProduct = async () => {
    try {
      const response = await axios.post('/api/produse', newProduct); 
      if (response.data) {
        console.log('Produs adăugat cu succes!');
        getProducts();
      }
    } catch (error) {
      console.error('Eroare la adăugarea produsului:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`/api/produse?id=${id}`);
      if (response.data) {
        console.log('Produsul a fost șters cu succes!');
        getProducts();
      }
    } catch (error) {
      console.error('Eroare la ștergerea produsului:', error);
    }
  };

  const confirmDeleteProduct = (id) => {
    if (window.confirm('Ești sigur că vrei să ștergi acest produs?')) {
      deleteProduct(id);
    }
  };

  const editProduct = async (id) => {
    const editedProduct = products.find(product => product._id === id);
    if (editedProduct) {
      setNewProduct({ ...editedProduct });
      setEditingProductId(id);
    }
  };

  const updateProduct = async () => {
    try {
      const response = await axios.put(`/api/produse?id=${editingProductId}`, newProduct);
      if (response.data) {
        console.log('Produsul a fost actualizat cu succes!');
        getProducts();
        setEditingProductId(null);
        setNewProduct({ nume: '', categorie: '', preț: 0 });
      }
    } catch (error) {
      console.error('Eroare la actualizarea produsului:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="container">
      <header>
        <h1>Produsele APOLODOR</h1>
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
              <th>Acțiuni</th> 
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id}>
                <td>{product.nume}</td>
                <td>{product.categorie}</td>
                <td>{product.preț}</td>
                <td>               
                  <button onClick={() => confirmDeleteProduct(product._id)}>Șterge</button>
                  <br></br>
                  <button onClick={() => editProduct(product._id)}>Editează</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="section">
        <h2>Adaugă un nou produs</h2>
        <input type="text" name="nume" placeholder="Numele produsului" value={newProduct.nume} onChange={handleInputChange} />
        <input type="text" name="categorie" placeholder="Categoria produsului" value={newProduct.categorie} onChange={handleInputChange} />
        <input type="number" name="preț" placeholder="Prețul produsului" value={newProduct.preț} onChange={handleInputChange} />
        {editingProductId ? (
          <button onClick={updateProduct} className="btn">Actualizează produs</button>
        ) : (
          <button onClick={addProduct} className="btn">Adaugă produs</button>
        )}
      </section>
    </div>
  );
}

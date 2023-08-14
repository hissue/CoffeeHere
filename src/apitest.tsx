import { useState, useEffect } from 'react';

interface Product {
  categoryId: string;
  name: string;
  price: number;
  option?: Option[];
}

interface Option {
  name: string;
  price?: number;
}

export default function Pay() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('/products'); // 여기서 '/products'는 실제 API 엔드포인트로 변경되어야 합니다.
                const ArrayData = await response.json();
                setProducts(ArrayData.data.product_coffee);
                console.log(ArrayData.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts();
    }, []);

    return (
      
        <div>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          {product.option && (
            <div>
              <h3>Options:</h3>
              <ul>
                {product.option.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    {option.name}
                    {option.price && ` (+$${option.price})`}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
    );
}


import { useState, useRef, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import CartHistory from "./components/CartHistory";

import { SlArrowDown, SlArrowUp, SlHome } from "react-icons/sl";
import { BsCart4 } from "react-icons/bs";
import Logo from './assets/image/Logo.png';


import { ICategories, IProduct } from "./commonTypes";

export default function App(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (id: string) => {
    setSelectedCategory(id);
  };

  return (
    <div className="flex w-full h-full">

      {/* Left Section */}
      {/* Left - Category Section */}
      <CategoryMenu handleCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />

      {/* Right Section */}
      <div className="w-5/6">
        {/* Right - Banner Section */}
        <BannerMenu />
        {/* Right - Menu Section */}
        <MainMenu selectedCategory={selectedCategory} />
      </div>
    </div >
  );
}


// Category Section
function CategoryMenu({ handleCategoryClick, selectedCategory }: { handleCategoryClick: (id: string) => void, selectedCategory: string | null }) {
  const horizontalScrollRef = useRef<HTMLDivElement>(null);

  // Categories data define
  const [categories, setCategories] = useState<ICategories[]>([]);

  const handleNextButtonClick = (nextType: 'prev' | 'next') => {
    if (!horizontalScrollRef.current) return;
    const categoryHeight = horizontalScrollRef.current.firstElementChild?.clientHeight || 0;
    const scrollAmount = nextType === 'prev' ? -categoryHeight : categoryHeight;
    horizontalScrollRef.current.scrollTop += scrollAmount;
  };

  // Categories Rest API
  const fetchCategories = async () => {
    try {
      const response = await fetch("/categories");
      const rawdata = await response.json();
      setCategories(rawdata.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }

  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className="w-1/6 flex justify-center">
        <div className="relative bg-white p-4 m-10 rounded-lg shadow-2xl w-3/5 flex flex-col justify-between">
          <div className="flex justify-center items-center mb-2">
            <button onClick={() => handleNextButtonClick('prev')}><SlArrowUp /></button>
          </div>
          <div ref={horizontalScrollRef} className="flex-1 overflow-hidden">
            <ul>
              {categories.map((category) => (
                <li
                  key={category.name}
                  className={`p-3 border-2 rounded-xl my-3 cursor-pointer flex items-center justify-center hover:border-indigo-700 ${selectedCategory === category.id ? 'bg-indigo-500 hover:bg-indigo-600 text-white' : ''
                    }`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="text-center my-7">
                    <h3 className="sm:text-base md:text-lg lg:text-xl font-bold">{category.name}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center mt-3">
            <button onClick={() => handleNextButtonClick('next')}><SlArrowDown /></button>
          </div>
        </div>
      </div>
    </>
  );
}

// Banner Section
function BannerMenu() {
  const [showStatus, setShowStatus] = useState<boolean>(false);

  const handleShowStatus = () => {
    setShowStatus(!showStatus);
  }

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://cdn-icons-png.flaticon.com/512/4062/4062340.png";
};

  return (
    <div className="h-1/6">
      <div className="flex items-center justify-between w-full h-full m-3">
        {/* Logo banner */}
        <img
                    src={Logo}
                    alt="target"
                    onError={handleImgError}
                    className="h-44"
                />

        {/* The Others*/}
        <div className="flex items-center justify-end mr-8">

          {/* Home Button */}
          <div className="text-4xl p-2 custom-button">
            <a href="/">
              <SlHome />
            </a>
          </div>

          {/* Cart Button */}
          <div className="text-3xl py-3 px-4 m-6 custom-button">
            <button onClick={() => setShowStatus(!showStatus)}>
              <BsCart4 />
            </button>
            {/* Cart History */}
            {showStatus && (
                <CartHistory handleShowStatus={handleShowStatus}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Menu Section
function MainMenu({ selectedCategory }: { selectedCategory: string | null }) {
  const [products, setProducts] = useState<IProduct[]>([]);

  // SelectedCategory filtering
  const filteredMenuProducts = selectedCategory
    ? products.filter((product) => product.categoryId === selectedCategory)
    : products;

  // Products Rest API
  const fetchProducts = async () => {
    try {
      const response = await fetch("/products");
      const rawData = await response.json();
      setProducts(rawData.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ul className="relative h-5/6 overflow-y-scroll overflow-x-hidden grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-0">
      {/* Poruct Cards */}
      {filteredMenuProducts.map((menuProduct) => (
        <ProductCard key={menuProduct.name} product={menuProduct} />
      ))}
    </ul>
  );
}





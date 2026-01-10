import { useState } from "react";
import { fruits } from "../data/Fruit.js";
import ProductFilters from "../ProductsFilter.jsx";
import MainFruit from "../data/MainFruit.jsx";
import Footer from "../../components/Footer.jsx"
export default function Fruit(){ 
const [filteredProducts, setFilteredProducts] = useState(fruits);

  const handleFilterChange = (filters) => {
    let items = [...fruits];

    if (filters.priceRange) {
      items = items.filter(
        p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
      );
    }

    if(filters.productType) {
      items = items.filter(
        p=> p.type === filters.productType
      )
    }

    if (filters.location) {
      items = items.filter(p =>
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.rating > 0) {
      items = items.filter(p => p.rating >= filters.rating);
    }

    if(filters.sortOpition === "priceLowHigh"){
      items.sort((a,b)=> a.price - b.price);
    }
    else if(filters.sortOpition === "popularity"){
      items.sort((a,b) =>b.rating - a.rating);
    }
    else if(filters.sortOpition ==="newArrivals"){
      items.sort((a,b) =>new Date(b.dateAdded) - new Date(a.dateAdded))
    }

    setFilteredProducts(items);
  };

  return (
    <div className="min-h-screen flex flex-col">
    <div className="flex flex-1">
      <ProductFilters onFilterChange={handleFilterChange} />
      <div className="flex flex-wrap justify-center gap-5 p-5">
      {filteredProducts.map((product, index)=>(
        <MainFruit
        key={index}
        src={product.src}
        alt={product.name}
        price={product.price}
        name={product.name}
        type={product.type}
        location={product.location}
        rating={product.rating}
        dateAdded={product.dateAdded}
        route={product.route}
        />
      )
      )}
    </div>
    </div>
    <Footer/>
    </div>
  );
}

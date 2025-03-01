/*import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  // Array of categories with names, image URLs, and route URLs
  const categories = [
    {
      name: "Crops",
      imageUrl:
        "https://eos.com/wp-content/uploads/2020/03/1_1920%D1%85600.jpg",
      route: "/crops",
    },
    {
      name: "Fruits",
      imageUrl:
        "https://th.bing.com/th/id/OIP.22XOhxYrd_Pu__NkrGadMgHaEo?rs=1&pid=ImgDetMain",
      route: "/fruits",
    },
    {
      name: "Vegetables",
      imageUrl:
        "https://th.bing.com/th/id/R.c655f6ad4bf1a12f920298b6e087200b?rik=KNLe3mk2jiJUjA&riu=http%3a%2f%2fcontent.kens5.com%2fphoto%2f2017%2f10%2f22%2fvegetables_1508727313637_11456014_ver1.0.jpg&ehk=Fq8Eoa9aKzsUPDZ8DtBhyVemrHDc8oqvw4qs3PvJii8%3d&risl=&pid=ImgRaw&r=0",
      route: "/vegetables",
    },
    {
      name: "Flowers",
      imageUrl:
        "https://www.1800flowers.com/blog/wp-content/uploads/2021/05/Birthday-Flowers-Colors.jpg",
      route: "/flowers",
    },
    /* {
       name: "GovData",
       imageUrl:
         "https://webz.io/wp-content/uploads/2023/03/gov-data-product-overview-01.jpg",
       route: "/GovData",
     }, 
  ];

  return (
    <div className="min-h-screen  mt-4 bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Agriculture Categories
        </h1>
        {/* Dynamically render each category using map } */
      /*  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.route}
              className="relative group block overflow-hidden bg-center bg-cover h-64 rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('${category.imageUrl}')`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-75 transition duration-300"></div>
              <div className="relative z-10 p-4">
                <h2 className="text-2xl text-white font-bold text-center">
                  {category.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} */

  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import "./home.css";
  
  function Home() {
    const categories = [
      {
        name: "Crops",
        imageUrl:
          "https://eos.com/wp-content/uploads/2020/03/1_1920%D1%85600.jpg",
        route: "/crops",
      },
      {
        name: "Fruits",
        imageUrl:
          "https://th.bing.com/th/id/OIP.22XOhxYrd_Pu__NkrGadMgHaEo?rs=1&pid=ImgDetMain",
        route: "/fruits",
      },
      {
        name: "Vegetables",
        imageUrl:
          "https://th.bing.com/th/id/R.c655f6ad4bf1a12f920298b6e087200b?rik=KNLe3mk2jiJUjA&riu=http%3a%2f%2fcontent.kens5.com%2fphoto%2f2017%2f10%2f22%2fvegetables_1508727313637_11456014_ver1.0.jpg&ehk=Fq8Eoa9aKzsUPDZ8DtBhyVemrHDc8oqvw4qs3PvJii8%3d&risl=&pid=ImgRaw&r=0",
        route: "/vegetables",
      },
      {
        name: "Flowers",
        imageUrl:
          "https://www.1800flowers.com/blog/wp-content/uploads/2021/05/Birthday-Flowers-Colors.jpg",
        route: "/flowers",
      },
      {
        name: "GovData",
        imageUrl:
          "https://webz.io/wp-content/uploads/2023/03/gov-data-product-overview-01.jpg",
        route: "/GovData",
      },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextCategory = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === categories.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevCategory = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? categories.length - 1 : prevIndex - 1
      );
    };
  
    return (
    <>
      {/* Quote outside the main container */}
      <h2 className="quote">"Agriculture is the foundation of civilization."</h2>

      <div className="big-container">
        <h2 className="category-title">{categories[currentIndex].name}</h2>
        <div className="category-grid">
          <div className="category-item">
            <Link
              to={categories[currentIndex].route}
              className="category-box"
              style={{
                backgroundImage: `url('${categories[currentIndex].imageUrl}')`,
              }}
            >
              <div className="category-overlay"></div>
            </Link>
          </div>
        </div>

        <div className="navigation-buttons">
          <button className="nav-btn" onClick={prevCategory}>
            &lt;--
          </button>
          <button className="nav-btn" onClick={nextCategory}>
            --&gt;
          </button>
        </div>
      </div>
    </>
  );
}
  export default Home;
  
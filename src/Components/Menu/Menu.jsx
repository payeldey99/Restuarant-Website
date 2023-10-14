import React from "react";
import "./Menu.css"; // Import the CSS file

function Menu() {
  // Define menu data with subcategories and items
  const menuData = [
    {
      subcategory: "Chowmein",
      items: [
        {
          name: "Veg Chowmein",
          price: "$10.99",
        },
        {
          name: "Chicken Chowmein",
          price: "$12.99",
        },
        // Add more items in the "Chowmein" subcategory
      ],
    },
    {
      subcategory: "Fried Rice",
      items: [
        {
          name: "Vegetable Fried Rice",
          price: "$9.99",
        },
        {
          name: "Shrimp Fried Rice",
          price: "$13.99",
        },
        // Add more items in the "Fried Rice" subcategory
      ],
    },
    {
      subcategory: "Moghlai",
      items: [
        {
          name: "Chicken Biryani",
          price: "$14.99",
        },
        {
          name: "Mutton Korma",
          price: "$16.99",
        },
        // Add more items in the "Moghlai" subcategory
      ],
    },
    {
      subcategory: "Rolls",
      items: [
        {
          name: "Veg Roll",
          price: "$7.99",
        },
        {
          name: "Paneer Roll",
          price: "$9.99",
        },
        // Add more items in the "Rolls" subcategory
      ],
    },
    {
      subcategory: "Curry",
      items: [
        {
          name: "Butter Chicken",
          price: "$15.99",
        },
        {
          name: "Veg Curry",
          price: "$12.99",
        },
        // Add more items in the "Curry" subcategory
      ],
    },
    {
      subcategory: "Paratha",
      items: [
        {
          name: "Lachcha Paratha",
          price: "$15.99",
        },
        {
          name: "Rumali Roti",
          price: "$12.99",
        },
        // Add more items in the "Curry" subcategory
      ],
    },
  ];

  return (
    <div className="menu-container">
      <h2 className="menu-title">Our Menu</h2>
      <div className="menu-columns">
        {menuData.map((category, index) => (
          <div key={index} className="menu-category">
            <h3 className="menu-subcategory">{category.subcategory}</h3>
            <ul className="menu-items">
              {category.items.map((item, i) => (
                <li key={i} className="menu-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

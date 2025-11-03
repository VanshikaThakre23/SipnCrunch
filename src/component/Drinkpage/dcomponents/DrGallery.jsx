import React, { useEffect, useState } from "react";
import "./DrGallery.css";
import { useWishlist } from "../../../context/WishlistContext";
import { useOrders } from "../../../context/OrderContext";
import { useAuth } from "../../../context/AuthContext"; // ✅ Import Auth Context
import { showToast } from "../../../utils/toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const drinksData = [
  { id: 1, name: "Blackberry Sunrise Sipper", category: "juices", price: 90, img: "assets/drink-images/b1.webp" },
  { id: 2, name: "Fresh Mango Paradise", category: "juices", price: 90, img: "assets/drink-images/b2.webp" },
  { id: 3, name: "Raspberry Delight", category: "juices", price: 95, img: "assets/drink-images/b3.webp" },
  { id: 4, name: "Watermelon Wonder", category: "juices", price: 80, img: "assets/drink-images/b4.webp" },
  { id: 5, name: "Dragon Fruit Bliss", category: "juices", price: 110, img: "assets/drink-images/b5.webp" },
  { id: 6, name: "White Peach Squeeze", category: "juices", price: 85, img: "assets/drink-images/b6.webp" },
  { id: 7, name: "Strawberry Bananza", category: "juices", price: 100, img: "assets/drink-images/b7.webp" },
  { id: 8, name: "Mango Cool Twist", category: "juices", price: 90, img: "assets/drink-images/b8.webp" },
  { id: 9, name: "Banana Juice", category: "juices", price: 70, img: "assets/drink-images/b9.webp" },
  { id: 10, name: "Mixed Fruit Shake", category: "shakes", price: 100, img: "assets/drink-images/s_1.webp" },
  { id: 11, name: "Berry Bliss", category: "colddrinks", price: 85, img: "assets/drink-images/s_4.webp" },
  { id: 12, name: "Mango Lassi", category: "colddrinks", price: 90, img: "assets/drink-images/mango-lassi-.png" },
  { id: 13, name: "Cookie Monster Shake", category: "shakes", price: 100, img: "assets/drink-images/monstershake.png" },
  { id: 14, name: "Classic Strawberry Milkshake", category: "shakes", price: 100, img: "assets/drink-images/Classic Strawberry Milkshake.webp" },
  { id: 15, name: "Fanta", category: "colddrinks", price: 90, img: "assets/drink-images/fanta.jpg" },
  { id: 16, name: "Fruit Bug Cocktail", category: "colddrinks", price: 90, img: "assets/drink-images/fruitcocktail.jpg" },
  { id: 17, name: "Strawberry Smoothie", category: "smoothies", price: 90, img: "assets/drink-images/strawberrysmoothie.png" },
];

const categories = ["juices", "shakes", "colddrinks", "smoothies"];

const DrGallery = () => {
  const [filter, setFilter] = useState("juices");
  const [visibleItems, setVisibleItems] = useState([]);
  const { addToWishlist } = useWishlist();
  const { addToOrders } = useOrders();
  const { user } = useAuth(); // ✅ get logged-in user

  useEffect(() => {
    setVisibleItems(drinksData.filter((d) => d.category === filter));
  }, [filter]);

  const handleWishlist = (item) => {
    if (!user) {
      showToast("Please login or register to add to wishlist ❤️", "warning");
      return;
    }
    addToWishlist(item);
    showToast(`${item.name} added to wishlist ❤️`, "info");
  };

  const handleOrder = (item) => {
    if (!user) {
      showToast("Please login or register to place an order 🧾", "warning");
      return;
    }
    addToOrders(item);
    showToast(`${item.name} added to cart 🛒`, "success");
  };

  return (
    <>
      <section className="dr-pickfav" id="J&S">
        <div className="dr-gallery-container" id="smoothie">
          <h2 className="dr-gallery-title">Pick Your Favourite Drink</h2>

          <ul className="dr-gallery-cats">
            {categories.map((cat) => (
              <li
                key={cat}
                className={`dr-filter ${filter === cat ? "dr-active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </li>
            ))}
          </ul>

          <div className="dr-product">
            {visibleItems.map((item) => (
              <div className="dr-itembox dr-show" key={item.id}>
                <div className="dr-img-container">
                  <img src={item.img} alt={item.name} className="dr-item-img" />
                  <p className="dr-item-name">{item.name}</p>

                  <div className="dr-icons">
                    <i
                      className="dr-wishlist-icon fa fa-heart"
                      title="Add to wishlist"
                      onClick={() => handleWishlist(item)}
                    />
                    <i
                      className="dr-cart-icon fa fa-shopping-cart"
                      title="Add to cart"
                      onClick={() => handleOrder(item)}
                    />
                  </div>

                  <button className="dr-item-button">₹{item.price}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ToastContainer />
    </>
  );
};

export default DrGallery;

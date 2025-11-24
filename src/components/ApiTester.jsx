import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function ApiTester() {
  const [activeURL, setActiveURL] = useState(
    "https://api.escuelajs.co/api/v1/products"
  );

  const { data, loading, error } = useFetch(activeURL);

  const PRODUCTS = "https://api.escuelajs.co/api/v1/products";
  const USERS = "https://jsonplaceholder.typicode.com/users";

  return (
    <div style={{ marginTop: "40px" }}>
      {/* BUTTONS */}
      <div className="btn-group">
        <button onClick={() => setActiveURL(PRODUCTS)}>Products</button>
        <button onClick={() => setActiveURL(USERS)}>Users</button>
      </div>

      {loading && <p style={{ textAlign: "center" }}> Loading...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}> {error}</p>}

      {/* ---- CARDS BASED ON API TYPE ---- */}
      <div className="card-container">
        {Array.isArray(data) &&
          data.map((item) => {
            // PRODUCT CARDS
            if (activeURL === PRODUCTS) {
              return (
                <div className="card" key={item.id}>
                  <img src={item.images?.[0]} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>₹ {item.price}</p>
                </div>
              );
            }

            // USER CARDS
            if (activeURL === USERS) {
              return (
                <div className="card" key={item.id}>
                  <h3>{item.name}</h3>
                  <p>{item.email}</p>
                  <small>{item.username}</small>
                </div>
              );
            }

         

            return null;
          })}
      </div>
    </div>
  );
}

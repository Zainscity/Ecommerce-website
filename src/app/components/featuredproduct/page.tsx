

const Featured = () => {
  const products = [
    { id: 1, name: "Side table", image: "side table 1.png" },
    { id: 2, name: "Sofa", image: "side table 2.png" },
  ];

  return (
    <div style={containerStyle}>
      {products.map((product) => (
        <div key={product.id} style={cardStyle}>
          <img src={product.image} alt={product.name} style={imageStyle} />
          <h3 style={nameStyle}>{product.name}</h3>
          <a href="#" style={linkStyle}>View More</a>
        </div>
      ))}
    </div>
  );
};

// Simple inline styles for the design
import { CSSProperties } from 'react';

const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "20px",
  padding: "20px",
  backgroundColor: "#FAF4F4",
  flexWrap: "wrap", // Ensures content wraps
};


const cardStyle: CSSProperties = {
  width: "90%", // Adjust width for smaller screens
    maxWidth: "400px", // Restrict maximum width
  height: "562px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FAF4F4",
};

const imageStyle = {
  width: "80%",
  height: "auto",
  marginBottom: "10px",
};

const nameStyle = {
  fontSize: "3rem",
  fontWeight: "",
  color: "#333",
};

const linkStyle = {
  fontSize: "1.5rem" ,
  textDecoration: "semibol",
  color: "#000",
  borderBottom: "2px solid #000",
  marginBottom: "50px"
};


export default Featured;

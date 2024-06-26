import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products, categories } from "../../helper/data";
import { Header } from "../header/Header";
import { v4 } from "uuid";
import { useState } from "react";

const ProductsList = () => {
  const [selectedCategory, setSelectedCategory] = useState(products);
  const [btnName, setBtnName] = useState("");
  const [input, setInput] = useState("");

  const filterProducts = (name) => {
    setBtnName(name);
    setSelectedCategory(
      name == "all"
        ? products
        : products.filter((item) => item.category == name)
    );
  };

  return (
    <>
      <Header categories={categories} filterProducts={filterProducts} />
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
        onChange={(e) => setInput(e.target.value)}
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {selectedCategory
            .filter((item) =>
              item.title.toLowerCase().includes(input.toLowerCase().trim())
            )
            .map((item) => (
              <ProductCard {...item} key={v4()} />
            ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;

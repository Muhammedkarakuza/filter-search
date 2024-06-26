import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import "./Header.scss";
import { v4 } from "uuid";

export const Header = ({ categories, filterProducts, handleSearch }) => {
  return (
    <Container className="header">
      <h1>Products List</h1>
      <Stack
        direction="vertical"
        gap={3}
        className="btns justify-content-center flex-md-row"
      >
        {categories.map((item) => (
          <button key={v4()} onClick={() => filterProducts(item)}>
            {item.toUpperCase()}
          </button>
        ))}
      </Stack>
    </Container>
  );
};

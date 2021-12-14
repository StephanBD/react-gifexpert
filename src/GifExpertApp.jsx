// import React, { Component, useState, useEffect, useRef } from 'react';

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

// ========================================
const GifExpertApp = (props) => {
  const [categories, setCategories] = useState(["one punch"]);
  // ----------------------

  // const handleAdd = () => {
  //   // setCategories([...categories, "Hunderxhunter"]);
  //   setCategories((c) => [...c, "HunterxHunter"]);
  // };
  // ----------------------
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
// ========================================
export default GifExpertApp;

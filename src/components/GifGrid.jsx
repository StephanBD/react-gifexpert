// import React, { Component, useState, useEffect, useRef } from 'react';

import { useFetchGifs } from "../hooks/useFetchGifs";

// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

// ========================================
const GifGrid = ({ category }) => {
  // ------------
  const { data: images, loading } = useFetchGifs(category);

  // ----------------------
  return (
    <>
      <h3>{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading</p>}
      <div>
        <ol className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </>
  );
};
// ========================================
export default GifGrid;
// import { useState } from "react";
// ========================================
const GifGridItem = (img) => {
  // const [images, setImages] = useState([]);
  // console.log(img);
  // ----------------------
  return (
    <div className="card animate__animated animate__bounce animate__pulse">
      <img src={img.url} alt={img.title} />
      <p>{img.title}</p>
    </div>
  );
};
// ========================================
export default GifGridItem;

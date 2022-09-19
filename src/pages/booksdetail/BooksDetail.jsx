import React from "react";
import { useLocation } from "react-router-dom";

const BooksDetail = () => {
  const location = useLocation();

  // Get data with using useLocation func.

  const booksData = location.state;
  console.log(booksData);
  const {
    id,
    accessInfo: {
      country,
      epub: { isAvailable },
      pdf: { isAvailable: pdfAvailable },
    },
    saleInfo: { isEbook, saleability },
    volumeInfo: {
      authors,
      categories,
      description,
      language,
      title,
      previewLink: onlineLink,
      imageLinks: { thumbnail },
    },
  } = booksData;
  console.log(onlineLink);
  return <div>BooksDetail</div>;
};

export default BooksDetail;

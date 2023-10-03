import React, { useState, useEffect } from 'react';
import './CarList.css';
import CarCard from './CarCard';

const ITEMS_PER_PAGE = 6;

const CarList = ({ data, searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = data.filter((car) =>
      car.make.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm, data]);

  const totalPages = 10;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredData.slice(startIndex, endIndex);
  };

  return (
    <div className="car-list">
      <div className="cards">
        {getPageData().map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="page-info">
          Page <button className='num-btn'>{currentPage}</button> of <button className='num-btn'>{totalPages}</button>
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CarList;

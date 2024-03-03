
import { useState } from 'react';
import '../App.css';
import { Pagination } from 'vishnu-ui';


function PaginationComponent() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items per page

    // Function to generate dummy data for the current page
    const generateDummyData = (currentPage:number, itemsPerPage:number) => {
        const startIndex = (currentPage - 1) * itemsPerPage + 1;
        return Array.from({ length: itemsPerPage }, (_, i) => `Item ${startIndex + i}`);
    };

    // Function to handle page change
    const handlePageChange = (pageNumber:number) => {
        setCurrentPage(pageNumber);
    };

    // Calculate total number of pages
    const totalPages = Math.ceil(20 / itemsPerPage);

    // Generate dummy data for the current page
    const dummyData = generateDummyData(currentPage, itemsPerPage);

    return (
        <div className="app-container">
            <h1 className="header">vishnu npm library</h1>

            {/* Pagination Component */}
            <ul className="pagination-list">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </ul>

            {/* Display current page number */}
            <p>Current Page: {currentPage}</p>

            {/* Display dummy data for the current page */}
            <ul>
                {dummyData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default PaginationComponent;

// import PaginationComponent from "./component/PaginationComponent"
// import InfiniteScrollComponent from "./component/infiniteScrollComponent"



// const App = () => {
//   return (
//     <div>
//     <InfiniteScrollComponent/>
//     <PaginationComponent/>
  
//     </div>
//   )
// }

// export default App;











// infinite scrool

// import './App.css';
// import { useCounter, Button, InfiniteScroll } from 'vishnu-ui';

// function App() {
//     // Dummy data for pagination and infinite scroll
//     const dummyData = Array.from({ length: 20 }, (_, i) => i + 1);

//     const { count, increment, decrement } = useCounter();
//     // const [currentPage, setCurrentPage] = useState(1);

//     const handleButtonClick = () => {
//         console.log('Button clicked!');
       
//     };

  

//     // Infinite Scroll


//     const handleScrollEnd = () => {
//         console.log('Reached end of scroll');
//         // You can add logic to fetch more data here
//     };

//     return (
//         <div className="app-container">
//             <h1>vishnu npm library</h1>
//             <h2>Counter: {count}</h2>
//             <div className="button-container">
//                 <Button onClick={increment}>Increment</Button>
//                 <Button onClick={decrement}>Decrement</Button>
//                 <Button onClick={handleButtonClick}>Wow</Button>
//             </div>

            
//             <InfiniteScroll onScrollEnd={handleScrollEnd}>
//                 {/* Content to be scrolled infinitely */}
//                 {dummyData.map((item) => (
//                     <div key={item} className="item">{item}</div>
//                 ))}
//             </InfiniteScroll>
//         </div>
//     );
// }

// export default App;







// .............
// pagination

import { useState } from 'react';
import './App.css';
import { Pagination } from 'vishnu-ui';

function App() {
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

export default App;

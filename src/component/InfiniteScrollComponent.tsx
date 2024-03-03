// infinite scrool

import '../App.css';
import { useCounter, Button, InfiniteScroll } from 'vishnu-ui';

function InfiniteScrollComponent() {
    // Dummy data for pagination and infinite scroll
    const dummyData = Array.from({ length: 20 }, (_, i) => i + 1);

    const { count, increment, decrement } = useCounter();
    // const [currentPage, setCurrentPage] = useState(1);

    const handleButtonClick = () => {
        console.log('Button clicked!');
       
    };

  



    const handleScrollEnd = () => {
        console.log('Reached end of scroll');
        // You can add logic to fetch more data here
    };

    return (
        <div className="app-container">
            <h1>vishnu npm library</h1>
            <h2>Counter: {count}</h2>
            <div className="button-container">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
                <Button onClick={handleButtonClick}>Wow</Button>
            </div>

            
            <InfiniteScroll onScrollEnd={handleScrollEnd}>
                {/* Content to be scrolled infinitely */}
                {dummyData.map((item) => (
                    <div key={item} className="item">{item}</div>
                ))}
            </InfiniteScroll>
        </div>
    );
}

export default InfiniteScrollComponent;



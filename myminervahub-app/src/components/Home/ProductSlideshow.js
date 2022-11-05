import React from 'react';
import ProductSlideshowData from '../../database/ProductSlideshowData';

const colors = ["#0088FE", "#00C49F", "#FFBB28", "hello"];
const delay = 10000;
const ProductSlideshow = () => {
  const ProductSlideshowDataElements = ProductSlideshowData.map(item => {
    return <span className='product-slideshow_content'>{item.content}</span>
  })
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
    return (
    <section className='ProductSlideshow'>
        {/* <div className='ProductSlideshow-Card'>
            {ProductSlideshowDataElements}
        </div> */}
        <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {/* {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          ></div>
        ))} */}
        <div className='ProductSlideshow-Card'>
        {ProductSlideshowData.map(item => {
    return <span className='product-slideshow_content'>{item.content}</span>
  })}
        </div>
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>

    </section>
  )
}

export default ProductSlideshow
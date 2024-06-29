import { Carousel } from "nuka-carousel";
import "./index.css";



const CarosoulEffect = () => {
  return (
    <div className="carousal-container paddings innerWidth">
      <h2 className="container-heading-home section-headings cultures" >
        - Explore about Indian Wedding Cultures -
      </h2>
      <div style={{ width: "100vw" }}>
        <Carousel wrapMode="wrap" autoplay={true} autoplayInterval={3000} title="Carousel" scrollDistance="screen" padding={50} showDots>
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="cultures-image"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="cultures-image"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="cultures-image"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="cultures-image"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="cultures-image"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="cultures-image"
            alt=""
          />
        </Carousel>
      </div>
    </div>
  );
};

export default CarosoulEffect;

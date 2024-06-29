import "./index.css";
import data from "../../utils/testnomials.json";

const Testnomials = () => {
  return (
    <div className="testnomials-container">
      <h2 className=" t-head section-headings">- What our clients say -</h2>
      <div className="testnomials-cards-container">
        {data.map((item) => (
          <div className="testnomials-card" key={item.id}>
            <img
              src={item.image}
              alt="testnomialImage"
              className="testnomials-image"
            />
            <div className="testnomials-card-content">
              <img
                src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1714809285/Quotation-Symbol-PNG_pak2tx.png"
                alt="inverted-commas"
                className="inverted-commas"
              />
              <div className="testnomials-card-para">
                <p className="testnomials-card-para-p">{item.message}</p>
                <p className="testnomials-card-para-writter">- {item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testnomials;

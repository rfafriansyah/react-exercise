import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <FotoProduct />
      <ProductInfo isDiscount="coming" category="DUARR" name="GREY SQUAD" />
    </div>
  );

  function FotoProduct() {
    return (
      <div className="Foto">
        <img
          src="./logo/samplesepatu-removebg-preview.png"
          alt="ini foto sepatu"
        />
      </div>
    );
  }

  function ProductInfo(props) {
    const { category, name, isDiscount } = props;
    const items = ["Awet", "Tahan Air", "Original", "Nyaman"];
    const listItems = items.map((item) => <li>{item}</li>);
    return (
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 73.000.000</p>
        <CheckDiscount isDiscount={isDiscount} />
        <p className="Info">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
        <ul>{listItems}</ul>
        <a onMouseOver={(e) => TambahCart(name, e)} href="#">
          Add to Chart
        </a>
      </div>
    );
  }

  function TambahCart(e) {
    return console.log(`Membeli product ${e}`);
  }

  function CheckDiscount(props) {
    const { isDiscount } = props;
    if (isDiscount === "yes") {
      return <p>Discount 50%</p>;
    } else if (isDiscount === "coming") {
      return <p>Discount is coming!!!</p>;
    } else {
      return <p>Discount not already</p>;
    }
  }
}

export default App;

import phoneImg from "../images/mobile.png";
import cartImage from '../images/cart.png'
export default function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img src={cartImage}></img>
      </div>
      <h2>Home Component</h2>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={phoneImg}></img>
        </div>
        <div className="text-wrapper item">
          <span>Phone</span>
          <span>Price: 20k</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

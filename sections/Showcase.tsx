import { Link } from "react-router-dom" ;
import img1 from '../assets/Images/showcaseLeft.png';
import img2 from '../assets/Images/showcaseRight.png';

const Showcase: React.FC = () => {
  return (
         <section className="showcase container">
             <img src={img1} className="showcase-left" alt="showcaseLeft" />
              <div className="showcase-text">
                 <h1>Sale Up</h1>
                 <h1>To 50% Off</h1>
                 <p>Online shopping free hme delivery over $100</p>
                 <Link to=" /products" className="btn-theme">SHOP NOW</Link>
              </div>
              <img src={img2} className="showcase-right" alt="showcaseRight"/>
         </section>
  )
}

export default Showcase;
import './Marquee.css';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';
import img6 from '../../images/img6.png';
import img7 from '../../images/img7.png';


function Marquee() {
  return (
    <>
<div class="logos">
      <div className="logos-slide">
        <img src={img1} alt="img"/>
        <img src={img2}  alt="img"/>
        <img src={img3} alt="img"/>
        <img src={img4} alt="img"/>
        <img src={img5} alt="img"/>
        <img src= {img6} alt="img"/>
        <img src={img7}  alt="img"/>
      </div>

      <div className="logos-slide">
      <img src={img1}  alt="img"/>
        <img src={img2}  alt="img"/>
        <img src={img3} alt="img"/>
        <img src={img4} alt="img"/>
        <img src={img5} alt="img"/>
        <img src= {img6} alt="img"/>
        <img src={img7} alt="img" />
  
      </div>
      </div>
    </>
  );
}

export default Marquee;

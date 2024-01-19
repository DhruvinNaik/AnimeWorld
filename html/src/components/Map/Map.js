import './Map.css';
export default function Map(){
    return(
        <>
        <h1>Details</h1><br/>   
      <div className='map-container'>
      <div className='about'>
          <h2><u>InfoLabz pvt ltd.</u></h2><br/>
          <p>A well known train and internship company loacted in Ahmedabad. Currenly providing internship in React and Mern Stack developemet along with data science and python.</p><br/>
          <p>
            <b>Contact:</b> info@infolabz.com<br />
            <b>Phone: </b>+91 123 456 7890
          </p><br/>
          <p>
           <b> Address:</b> 123, XYZ Street, Ahmedabad, India
          </p>
        </div>
        <div className='map'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6068531410297!2d72.55580477477068!3d23.03820311574574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85ff3a38c353%3A0xdabe316634ef7e5e!2sInfoLabz!5e0!3m2!1sen!2sin!4v1705587508152!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            title="Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

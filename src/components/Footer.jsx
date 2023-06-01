function Footer() {
  return (
    <>
      <section className='footer container'>
          <div className='row py-5'>
            <div className='col mb-3'>
              <h1>Sign Up for Our Newsletters</h1>
            </div>
            <div className='col pt-2 mb-3'>
              {" "}
              <p className='text-start'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum a
                inventore dolorum modi assumenda, quam veniam non ab et!
                Corrupti iusto eum explicabo? Suscipit, reprehenderit.
              </p>
            </div>
            <div>
              <input
                className='footer-input mb-2'
                type='email'
                placeholder='Input your email address here'
              />
              <button className='btn header-btn text-light ms-2'>
                Subscribe Now
              </button>
            </div>
          </div>
      </section>
      <div className='d-flex flex-wrap justify-content-between container py-4'>
        <div>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod atque
          molestiae perferendis facere nisi rem, saepe cum. Minima dolor
          molestias eius corporis, et, atque totam laboriosam, cum reprehenderit
          beatae perspiciatis!
          </p>
         
        </div>
        <div>
          <p className='fw-bold'>Categories</p>
          <p >International</p>
          <p>Regional</p>
          <p>Politics</p>
          <p>Business</p>
          <p>Sport</p>
          <p>Health</p>
        </div>
        <div>
          <p className='fw-bold'>Company</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms Of Services</p>
          <p>Carrers</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p className='fw-bold'>Social Media</p>
          <p>Youtube</p>
          <p>Instagram</p>
          <p>Terms Of Services</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>
      <p className='text-center text-secondary'><span>&copy;</span>Newsland</p>
    </>
  );
}

export default Footer;

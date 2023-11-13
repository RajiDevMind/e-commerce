import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>get exclusive offers on your email</h1>
      <p>Subscribe to our newsletter and stay updated!</p>
      <div>
        <input type="email" placeholder="uremail@mail.com" />
        <button type="submit">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;

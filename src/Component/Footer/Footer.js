import Button from "../Button/Button"
import Title from "../Title/Title"
import "./Footer.css"

const Footer =()=>{
    return(
        <>
      <div className="footer">
    <div className="container">
        <div className="row">
            <div className="footer-col-1">
                <Title>Logo</Title>
                <p>+234-809-493-0206</p>
            </div>
            <div className="footer-col-2">
                <Title>About Us</Title>
                <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Good Fashion Accessible to many.</p>
            </div>
            <div className="footer-col-3">
                <Title>Useful Links</Title>
               <ul>
                   <li>Coupons</li>
                   <li>Blog Post</li>
                   <li>Return Policy</li>
                   <li>Join Affiliate</li>
               </ul>
            </div>
            <div className="footer-col-4">
                <Title>Follow us</Title>
               <ul>
                   <li>Facebook</li>
                   <li>Twitter</li>
                   <li>Instagram</li>
                   <li>Youtube</li>
               </ul>
            </div>
        </div>
        <hr />
        <p className="copyright">Copyright 2020 - <span>Designed & Developed By Ebubechi</span> </p>
    </div>
</div>
        </>

    )
}

export default Footer
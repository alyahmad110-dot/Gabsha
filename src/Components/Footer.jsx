import fotterbg from '../../public/footerbg.png';
import gambshalogo from '../../public/gambshalogo.png';
import fb from '../../public/fb.svg';
import insta from '../../public/insta.svg';
import linkedin from '../../public/linkedin.svg';
import twitter from '../../public/twitter.svg';
import polygon from '../../public/polygon.svg'







export default function Footer (){
    return(
        <div className="container footer">
            <div className="row">
                <div className="col footer-1col">
                    <div>
<img src={gambshalogo} alt="LOGO" />
                    </div>
                    <div>
                        <p style={{fontSize:"14px", fontWeight:"400", color:"#29265F"}}>Ghabsha Events and Training offers its knowledge and business services with a new creative mindset, under the slogan 'Excellence First'</p>
                    </div>

                    <div className='footer-icons'>
                        <a href="facebook"><img src={fb} alt="facebook" /></a>
                        <a href="instagram"><img src={insta} alt="instagram" /></a>
                        <a href="linkedin"><img src={linkedin} alt="linkedin" /></a>
                        <a href="twitter"><img src={twitter} alt="twitter" /></a>


                    </div>

                </div>


                <div className='col '>
<div className='footer-toptxt'>
  <div>
    <p> Quick Links</p>
  </div>
<div className='nav-links'>
<a className='nav-link' href="Home"><img src={polygon}  alt="" /> Home </a>
<a className='nav-link' href="Home"><img src={polygon}  alt="" /> About Us </a>
<a className='nav-link' href="Home"><img src={polygon}  alt="" /> Our Vision </a>
<a className='nav-link' href="Home"><img src={polygon}  alt="" /> Our Message </a>
<a className='nav-link' href="Home"><img src={polygon}  alt="" /> Our Goals </a>
<a className='nav-link' href="Home"><img src={polygon}  alt="" /> Our Services </a>
<a className='nav-link' href="Home"><img src={polygon}  alt="" /> Contact </a>


</div>
</div>
                </div>









                 <div className='col '>
<div className='footer-toptxt'>
  <p> Our Policies</p>
</div>
<div className='nav-links'>
<a className='nav-link' href="Home"><img src={polygon}  alt="" /> Terms of Services </a>
<a className='nav-link' href="Home"><img src={polygon}  alt="" /> Privacy Policy </a>



</div>
                </div>







                 <div className='col '>
<div className='footer-toptxt'>
  <p> Newsletter</p>
  <p className='nav-link'>Subscribe Our Newsletter To Get Latest Update And News</p>
              <input className="card-placeholder" type="email" placeholder="Email" />
<div style={{paddingTop:"30px"}}>
    <button className='navbtn'>Subscribe Now</button>
</div>
</div>
                </div>

            </div>

        </div>
    )
}
import React from "react";
import "./Home.css";
<<<<<<< HEAD
import cafe from "../../assets/image/cafe.PNG";
import img1 from "../../assets/image/123.png";
import line from "../../assets/image/logoup.PNG";
import logocryon from "../../assets/image/logoCryon.PNG";
import logoapp from "../../assets/image/logoapp.PNG";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
=======
import img1 from "../../assets/image/123.png";
import line from "../../assets/image/logoup.PNG";
import girl from "../../assets/image/hotGirl.png";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import k2 from "../../assets/image/k2.jpeg";
import k3 from "../../assets/image/k3.jpeg";
import k4 from "../../assets/image/k4.jpeg";
import k5 from "../../assets/image/k5.jpeg";
import logo1 from "../../assets/image/logoPink.PNG";
import gif from "../../assets/image/111.gif";
import moreice from "../../assets/image/moreIce.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import video from "../../assets/video/video.mp4";
>>>>>>> 045859257659603afb4606e63fee44b250bf493c

const Home = () => {
  return (
    <>
      <div id="container1">
        <h1>Welcom to the CandyShop</h1>
      </div>
      <div className="container2">
        <div>
          <h1 id="h1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            dolor!
          </h1>
          <img id="line" src={line} alt="BG2" />

          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            reiciendis voluptatum accusamus explicabo soluta voluptate. Laborum
            earum minus rerum aliquam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. In officia consectetur exercitationem earum!
            Accusantium est illum, sit error optio voluptas.
          </h2>
        </div>
      </div>
<<<<<<< HEAD
      <div id="container3">
        <img id="img1" src={img1} alt="img1" />
        <div id="text">
          <h2>
            1Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            voluptatem.
          </h2>
          <img id="line" src={line} alt="BG2" />
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            reiciendis voluptatum accusamus explicabo soluta voluptate. Laborum
            earum minus rerum aliquam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. In officia consectetur exercitationem earum!
            Accusantium est illum, sit error optio voluptas.
          </h2>
          <NavLink to="/products">
            <Button>Get to Shop</Button>
          </NavLink>
        </div>
      </div>
      <div className="container4">
        <div>
=======
      <div id="carousel">
        <div>
          <img className="k" src={k2} alt="BG2" />
          <h2 className="h2K">iceCream</h2>
        </div>
        <div>
          <img className="k" src={k3} alt="BG2" />
          <h2 className="h2K">Escimo</h2>
        </div>
        <div>
          <img className="k" src={k4} alt="BG2" />
          <h2 className="h2K">Cake</h2>
        </div>
        <div>
          <img className="k" src={k5} alt="BG2" />
          <h2 className="h2K">Cold IceCream</h2>
        </div>
      </div>
      <div className="container4">
        <div className="text2">
>>>>>>> 045859257659603afb4606e63fee44b250bf493c
          <h1 id="h1">A Little Bit of History</h1>
          <img id="line" src={line} alt="BG2" />

          <h2>
            Back in 1945, Burt Baskin and Irv Robbins had a pretty great idea.
            See, they were big ice cream people. So while every other ice cream
            shop stuck with vanilla, chocolate, and strawberry, they decided to
            go big. Like, “let’s offer 31 flavors instead” big. Because ice
            cream should be an every day treat. And the people? Yeah, they loved
            that. It's safe to say Burt and Irv’s passion made an impact. Fast
            forward about 75 years, and we’re over 1400 flavors strong. Which
            is… kinda crazy when you think about it. But the best part is, we’ve
            got flavors for everyone, for every day, and for every occasion. So,
            whether your kid’s team finally won a game, you found your left
            shoe, or you just got out of bed this morning, there's always a
            yay-worthy scoop ready for you. And we think that's pretty cool.
          </h2>
        </div>
<<<<<<< HEAD
      </div>
      <div className="container5">
        <div id="text2">
=======
        <img id="logo1" src={logo1} alt="BG2" />
      </div>
      <div id="container3">
        <img id="img1" src={img1} alt="img1" />
        <div id="text">
          <h2>
            1Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            voluptatem.
          </h2>
          <img id="line" src={line} alt="BG2" />
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            reiciendis voluptatum accusamus explicabo soluta voluptate. Laborum
            earum minus rerum aliquam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. In officia consectetur exercitationem earum!
            Accusantium est illum, sit error optio voluptas.
          </h2>
          <NavLink to="/products">
            <Button id="btn" variant="contained" color="secondary" size="large">
              Go to Shop
            </Button>
          </NavLink>
        </div>
      </div>
      <div id="girl1">
        <div className="text5_5">
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
            possimus.
          </h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            blanditiis qui omnis dolor molestias ducimus cumque. Labore
            reiciendis aspernatur perspiciatis.
          </h3>
        </div>
        <img id="girl" src={girl} />
      </div>

      <div className="container5">
        <div className="text5">
>>>>>>> 045859257659603afb4606e63fee44b250bf493c
          <h1 id="h1">Keepin’ It Local</h1>
          <img id="line" src={line} alt="BG2" />

          <h2>
            All of our 2400+ locations in the United States are locally owned
            and operated. So, no matter which shop you visit, you’re always
            supporting a local business. And that’s a reason to celebrate.
          </h2>
        </div>
        <div>
<<<<<<< HEAD
          <img id="cafe" src={cafe} />
        </div>
      </div>
      <div className="container6">
        <div>
          <img id="logocryon" src={logocryon} />
        </div>
        <div id="text2">
          <h1 id="h1">Keepin’ It Local</h1>
=======
          <img id="moreice" src={moreice} alt="BG2" />
        </div>
      </div>
      <div className="container6">
        <div></div>
        <img id="gif" src={gif} alt="BG2" />
        <div className="text2">
          <h1 id="h1">GIF Lorem ipsum dolor sit amet.</h1>
>>>>>>> 045859257659603afb4606e63fee44b250bf493c
          <img id="line" src={line} alt="BG2" />
          <h2>
            All of our 2400+ locations in the United States are locally owned
            and operated. So, no matter which shop you visit, you’re always
            supporting a local business. And that’s a reason to celebrate.
          </h2>
        </div>
      </div>
<<<<<<< HEAD
      <div className="container7">
        <div id="text2">
          <h1 id="h1">Keepin’ It Local</h1>
          <img id="line" src={line} alt="BG2" />

          <h2>
            All of our 2400+ locations in the United States are locally owned
            and operated. So, no matter which shop you visit, you’re always
            supporting a local business. And that’s a reason to celebrate.
          </h2>
        </div>
        <div>
          <img id="logoapp" src={logoapp} />
        </div>
      </div>
      <footer></footer>
=======
      <div id="container7">
        <div className="h2K">
          <h1 id="h1">GIF Lorem ipsum dolor sit amet.</h1>
          <img id="line" src={line} alt="BG2" />
          <h2>
            All of our 2400+ locations in the United States are locally owned
            and operated. So, no matter which shop you visit, you’re always
            supporting a local business. And that’s a reason to celebrate.
          </h2>
        </div>

        <video autoPlay loop muted>
          <source src={video} type="video/mp4" className="video1" />
        </video>
      </div>

      <footer>
        <div className="textfooter">
          <h2>More Ways to BR</h2>
          <img id="line" src={line} alt="BG2" />
          <h4>Merchandise </h4>
          <h4>Mobile App </h4>
          <h4>Gift Cards </h4>
        </div>
        <div>
          <h2>Join The Team</h2>
          <img id="line" src={line} alt="BG2" />
          <h4>Careers </h4>
          <h4>Franchising </h4>
          <h4>Contact Us </h4>
        </div>
        <div>
          <h2>Company Info</h2>
          <img id="line" src={line} alt="BG2" />
          <h4>Our Story </h4>
          <h4>FAQs </h4>
          <h4>Pressroom</h4>
          <h4>Sustainability</h4>
          <h4>Pressroom</h4>
        </div>
        <div>
          <img id="logoFooter" src={logo1} />
          <h2>Even sweeter on IOS & Android</h2>
          <h4>Get details,order cakes, send gift andmore </h4>
          <h3>Get the scoop </h3>
        </div>
      </footer>
>>>>>>> 045859257659603afb4606e63fee44b250bf493c
    </>
  );
};

export default Home;

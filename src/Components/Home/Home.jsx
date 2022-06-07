import React from "react";
import "./Home.css";
import cafe from "../../assets/image/cafe.PNG";
import img1 from "../../assets/image/123.png";
import line from "../../assets/image/logoup.PNG";
import logocryon from "../../assets/image/logoCryon.PNG";
import logoapp from "../../assets/image/logoapp.PNG";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

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
      </div>
      <div className="container5">
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
          <img id="cafe" src={cafe} />
        </div>
      </div>
      <div className="container6">
        <div>
          <img id="logocryon" src={logocryon} />
        </div>
        <div id="text2">
          <h1 id="h1">Keepin’ It Local</h1>
          <img id="line" src={line} alt="BG2" />
          <h2>
            All of our 2400+ locations in the United States are locally owned
            and operated. So, no matter which shop you visit, you’re always
            supporting a local business. And that’s a reason to celebrate.
          </h2>
        </div>
      </div>
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
    </>
  );
};

export default Home;

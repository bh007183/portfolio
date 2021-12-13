import React from "react";
import { Link } from "react-router-dom";
import JacobsPhoto from "../../images/Jacobs-Port.jpg";
import Emissary from "../../images/emissary.jpg";
import Movie from "../../images/movie.jpg"
import BookMania from "../../images/bookmania.png"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.css";

export default function Home() {
  return (
    <div id="project-contain">
      <section className="top-body">
        <div className="hexagon hexagon1 ">
          <div id="hex-child1" className="hex-child"></div>
        </div>
        <div className="hexagon hexagon2 ">
          <div id="hex-child2" className="hex-child"></div>
        </div>
        <div className="hex-card">
          <h2 className="center-text">Short Intro</h2>
          <p className="center-text" style={{ fontSize: "18px" }}>
            Hey there! If you care to learn more about me, check out my "About Me" page! Otherwise, feel free to checkout my applications! My portfolio is growing and so is my knowledge!
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "35px",
            }}
          >
            <a
              id="pro-link"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ben-hopkins-24a41357"
              target="_blank"
              style={{fontWeight: 'bold', background: "rgba(255, 255, 255, 0.6)"}}
            >
              LinkedIn
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              
            }}
          >
            <a
              id="pro-link"
              rel="noreferrer"
              href="https://github.com/bh007183"
              target="_blank"
              style={{fontWeight: 'bold', background: "rgba(255, 255, 255, 0.6)"}}
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
      <section className="body-body">
      <Card className="Card">
          <CardMedia
            component="img"
            height="240"
            image={BookMania}
            alt="Image of book mania homepage"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"  style={{fontFamily: 'Cormorant Garamond' }}>
              Book Mania
            </Typography>
            <Typography  style={{fontFamily: 'Cormorant Garamond', fontSize: "17px" }}>
              A MERN application where users can create accounts, search for books, and show others what they are reading. They can also recommend books for their connections to read! Future development would include adding more categories to browse by and style adjustments.
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "space-between" }}>
            <Button
              href="https://bjh-book-mania-123.herokuapp.com/"
              target="_blank"
              size="small"
              style={{fontFamily: 'Cormorant Garamond', fontSize: "17px" }}
            >
              Visit Site
            </Button>
            <Button
              href="https://github.com/bh007183/book-mania"
              target="_blank"
              size="small"
              style={{fontFamily: 'Cormorant Garamond', fontSize: "17px" }}
            >
              GitHub Repo
            </Button>
          </CardActions>
        </Card>
        <Card className="Card">
          <CardMedia
            component="img"
            height="240"
            image={JacobsPhoto}
            alt="Jacops-Port Home Page"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"  style={{fontFamily: 'Cormorant Garamond' }}>
              Jacobs Photography
            </Typography>
            <Typography  style={{fontFamily: 'Cormorant Garamond', fontSize: "17px" }}>
              A full stack photography website that allows the photographer to
              upload thier work. You will not be able to see this functionality.
              You will be able to see the public faceing part of the site and
              browse Jacob's photos or videos.
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "space-between" }}>
            <Button
              href="https://jacobsportfolio1234.herokuapp.com/"
              target="_blank"
              size="small"
              style={{fontFamily: 'Cormorant Garamond', fontSize: "17px" }}
            >
              Visit Site
            </Button>
            <Button
              href="https://github.com/bh007183/Jacobs-Photos/"
              target="_blank"
              size="small"
              style={{fontFamily: 'Cormorant Garamond', fontSize: "17px" }}
            >
              GitHub Repo
            </Button>
          </CardActions>
        </Card>
        <Card className="Card">
          <CardMedia
            component="img"
            height="240"
            image={Emissary}
            alt="Image of emissary homepage"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"  style={{fontFamily: 'Cormorant Garamond' }}>
              Emissary
            </Typography>
            <Typography  style={{fontFamily: 'Cormorant Garamond', fontSize: "17px" }}>
              A simple, buggy, chat aplication that enables you to communicate
              in real time! I spent alot of time on this application but a lot
              more is needed. It is also not mobile friendly but you should be
              able to play with it on a desktop.
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "space-between" }}>
            <Button
              href="https://foreign-emissary.herokuapp.com/"
              target="_blank"
              size="small"
              style={{fontFamily: 'Cormorant Garamond', fontSize: "17px" }}
            >
              Visit Site
            </Button>
            <Button
              href="https://github.com/bh007183/emissary/"
              target="_blank"
              size="small"
              style={{fontFamily: 'Cormorant Garamond', fontSize: "17px" }}
            >
              GitHub Repo
            </Button>
          </CardActions>
        </Card>
        <Card className="Card" style={{marginBottom: "30px"}}>
          <CardMedia
            component="img"
            height="240"
            image={Movie}
            alt="Image of Movie List home page."
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"  style={{fontFamily: 'Cormorant Garamond' }}>
              Watch List
            </Typography>
            <Typography  style={{fontFamily: 'Cormorant Garamond', fontSize: "17px"}}>
              A simple, full-stack appication that utilizes mongodb and a third party api to search and store movies. The third party api provides streeming locations or rental locations. If you click save on a movie it will add it to the saved page.
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "space-between" }}>
            <Button
              href="https://moviesearch-bjh.herokuapp.com/"
              target="_blank"
              size="small"
              style={{fontFamily: 'Cormorant Garamond', fontSize: "17px" }}
            >
              Visit Site
            </Button>
            <Button
              href="https://github.com/bh007183/Movie-Search/"
              target="_blank"
              size="small"
              style={{fontFamily: 'Cormorant Garamond', fontSize: "17px" }}
            >
              GitHub Repo
            </Button>
          </CardActions>
        </Card>
      </section>
    </div>
  );
}

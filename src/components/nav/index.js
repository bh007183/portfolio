import React from "react";
import clsx from "clsx";
import DescriptionIcon from '@mui/icons-material/Description';
import resume from "../../documents/Resume.pdf";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/Info";
import { Hidden } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import "./style.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <Hidden smDown>
        <div id="nav">
          <Link to="/">Home</Link>
          <Link to="/about-me">About Me</Link>

          <a href={resume} target="_blank">
            Resume
          </a>
        </div>
      </Hidden>

      <Hidden mdUp>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="end"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Drawer
        className={classes.drawer}
        // variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link name="home" onClick={handleDrawerClose} className="link" to="/">
            <ListItem button>
              <ListItemIcon>
                {" "}
                <HomeIcon className="icon" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Divider />
          <Link
            name="whoWeAre"
            onClick={handleDrawerClose}
            className="link"
            to="/about-me"
          >
            <ListItem button>
              <ListItemIcon>
                {" "}
                <InfoIcon className="icon" />
              </ListItemIcon>
              <ListItemText primary="About Me" />
            </ListItem>
          </Link>
          

          
<Divider/>
<Link
            name="whoWeAre"
            onClick={handleDrawerClose}
            className="link"
            to={resume}
            target="_blank"
          >
            <ListItem button>
              <ListItemIcon>
                {" "}
                <DescriptionIcon className="icon" />
              </ListItemIcon>
              <ListItemText primary="Resume" />
            </ListItem>
          </Link>
          <Divider/>
          
        </List>
      </Drawer>
    </div>
  );
}

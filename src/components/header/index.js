import React from "react";
import "./style.css";
import PersistentDrawerLeft from "../nav";

export default function Header() {
  return (
    <div id="header-parent">
      <PersistentDrawerLeft />
      <div id="tolkein">
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          To the sea, to the sea! The white gulls are crying, The wind is
          blowing, and the white foam is flying. West, west away, the round sun
          is falling, Grey ship, grey ship, do you hear them calling...
        </p>
        <div id="sig" style={{ textAlign: "center"}}> ~ J. R. R. Tolkien</div>
      </div>
    </div>
  );
}

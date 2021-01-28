import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import JumpTo from "./layouts/content-header"

const Header = () => {
  //TODO add image, connect algolia search, possibly make layout for algolia search 
  return (
    <div id="defaultheader">
      <div id="logocontainer" >
        <a href="/index.html"><img src="img/lp-logo.svg" /></a>
      </div >
      <input type="text" id="aa-search-input" class="aa-input-search" placeholder="Search our knowledge center..." name="search" autocomplete="on" />
      <div id="homebuttons">
        <span id="login" class="homebutton">
          <a target="_blank" href="https://liveengage.liveperson.net">LivePerson login</a>
        </span>
      </div>
    </div>
  )
}



export default Header

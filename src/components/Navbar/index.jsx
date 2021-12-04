import React from "react";
import dineoutlogo from "../../assets/img/dineoutlogo.png"
import logo from "../../assets/img/logo1.jpg"
import styles from './index.module.scss';
import { Image } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';

export default function Navbar() {

return <div className={styles.Navbar}>
<header className={styles.header}>
<h1 className={styles.logo}><a> <img src={dineoutlogo} width={103} 
     height={32}></img> </a></h1>
<ul className={styles.mainnav}>
  <li style={{paddingRight: '20px'}}><Avatar sx={{  }} aria-label="recipe" style={{backgroundColor:'#EC403A',height: '33px', width: '33px'}}>S</Avatar></li>
</ul>
</header> 
</div>;
}
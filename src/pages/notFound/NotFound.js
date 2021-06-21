import React from "react";
import {Link} from "react-router-dom";
import styles from "./NotFound.module.css"
import guy from "../../assets/desktop/backgrounds/not found 3.png";


function NotFound() {


    return (
        <div className={styles.container}>
            <img className={styles.background} src={guy} alt={guy}/>
            <div className={styles.textContainer}>
            <article className={styles.set}>
                <h2 className={styles.header}>SORRY! (404 NOT FOUND)</h2>
            <p className={styles.bodyText}>THAT PAGE DOESN'T EXIST (YET)!
                PLEASE TRY AGAIN OR CLICK ON ONE OF THE LINKS ABOVE</p>
            <div className={styles.backHome}>
                <Link to={"/homePage"} className={styles.link}>back to home?</Link>
            </div>
            </article>
            </div>
        </div>
    );
}

export default NotFound;
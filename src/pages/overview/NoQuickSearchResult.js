import React from "react";
import {Link} from "react-router-dom";
import styles from "./NoQuickSearchResult.module.css"
import guy from "../../assets/desktop/backgrounds/not found 3.png";


function NoQuickSearchResult() {


    return (
        <div className={styles.container}>
            <img className={styles.background} src={guy} alt={guy}/>
            <div className={styles.textContainer}>
            <article className={styles.set}>
                <h2 className={styles.header}>GUILD NOT IN YOUR AREACODE</h2>
            <p className={styles.bodyText}>THE GUILD YOU ARE SEARCHING IS NOT PRESENT IN YOUR AREACODE
                PLEASE TRY AGAIN OR CLICK ON ONE OF THE LINKS ABOVE</p>
            <div className={styles.backHome}>
                <Link to={"/homePage"} className={styles.link}>Try another search?</Link>
            </div>
                <div className={styles.backHome}>
                    <Link to={"/overview"} className={styles.link}>Find all items?</Link>
                </div>

            </article>
            </div>
        </div>
    );
}

export default NoQuickSearchResult;
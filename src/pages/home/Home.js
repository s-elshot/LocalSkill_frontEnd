import styles from "./home.module.css"
import homePic from "../../assets/desktop/backgrounds/cropped_pexels-photo-5915140@2x.png";
import React from "react";
import find from "../../assets/mobileIcons/Icon awesome-search@2x.png";
import OverviewComponent from "../../components/object/overviewComponent";

function Home() {

    return (
        <div className={styles.container}>
            <img className={styles.backgroundImage} src={homePic} alt={homePic}/>
            <h1 className={styles.enterText}>LOCAL SKILL</h1>
            <h1 className={styles.formHeader}>SEARCH</h1>

            <fieldset className={styles.searchElement}>
                <input className={styles.input} type="text" placeholder="Search products / services"/>
                <input className={styles.input} type="text" placeholder="Insert your price"/>
                <button className={styles.button} type="submit"><img className={styles.img} src={find} alt={find}/></button>
            </fieldset>

            <OverviewComponent
                title="Explore your community"
                bodyText="incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non. Neque laoreet suspendisse interdum consectetur libero id. "
                link="/signUp"
                linkText="Sign up as a customer today"
            />

            <OverviewComponent
                title="Contribute to the community?"
                bodyText="incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non. Neque laoreet suspendisse interdum consectetur libero id. "
                link="/signUp"
                linkText="Sign up as a guilder today"
            />
        </div>
    );
}

export default Home;
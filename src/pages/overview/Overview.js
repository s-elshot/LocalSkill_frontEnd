import React from 'react';
import Item from "../../components/object/Item";
import styles from "./Overview.module.css"
import find from "../../assets/mobileIcons/Icon awesome-search@2x.png"
// import overviewPic from "../../assets/desktop/backgrounds/Mask Group 1.png"
import OverviewComponent from "../../components/object/overviewComponent";

function Overview() {

    return (
        <div className={styles.container}>

            {/*<img className={styles.overViewBackground} src={overviewPic} alt={overviewPic}/>*/}
            <h1 className={styles.enterText}>LOCAL SKILL</h1>

            <h2 className={styles.formHeader}>SEARCH</h2>

            <fieldset className={styles.searchElement}>
                <h2 className={styles.formHeader}>SEARCH</h2>
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

            <Item/>

        </div>
    );
}

export default Overview;
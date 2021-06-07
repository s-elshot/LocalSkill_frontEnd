import styles from "./overviewComponent.module.css"
import {NavLink} from "react-router-dom";


function OverviewComponent({title, bodyText, link, linkText}) {

    return (

        <article className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.bodyText}>{bodyText}</p>
            <button className={styles.button}>
                <NavLink to={link} activeClassName="overviewLink">{linkText}</NavLink>
            </button>
        </article>
    )

}

export default OverviewComponent;
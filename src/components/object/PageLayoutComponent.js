import React from "react";
import styles from "./PageLayoutComponent.module.css"

function PageLayoutComponent({img, imgAlt, formHeader}) {


    return (
        <div className={styles.container}>
            <h1>LOCAL SKILL</h1>
            <img alt={imgAlt} className={styles.backgroundImage} src={img}/>
            <h1 className={styles.formHeader}>{formHeader}</h1>

        </div>
    );
}

export default PageLayoutComponent;
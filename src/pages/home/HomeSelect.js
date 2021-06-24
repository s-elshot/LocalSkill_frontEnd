import React
    // , { Component }
    from 'react'
import Select from 'react-select'
import styles from "./HomeSelect.module.css"
function HomeSelect({option, fieldRef,name, errors,placeholder, children}){



    return(
        <>
        <Select
            name={name}
            placeholder={placeholder}
            className={styles.input}
            fieldRef ={fieldRef}
            errors={errors[name] && <span id="signUpError" className={styles.error}> {errors[name].message}</span>}
        >{option}
        </Select>

    </>
    )
}

export default HomeSelect
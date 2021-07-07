import styles from "./home.module.css"
import homePic from "../../assets/desktop/backgrounds/logIn.png";
import React from "react";
import find from "../../assets/mobileIcons/Icon awesome-search@2x.png";
import OverviewComponent from "../../components/object/overviewComponent";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import FormInputComponent from "../../components/forms/FormInputComponent";




function Home() {

    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const history = useHistory();


    async function onSubmit(data) {
        console.log(data)
        console.log(errors)
        console.log(data.areaCode)
        console.log(data.customerGuild)
        // console.log(data.firstName)
        // console.log(data.itemType)
        // history.push(`/overview/${data.itemType}/${data.areaCode}`)
        history.push(`/overview/${data.customerGuild}/${data.areaCode}`)
    }


    return (
        <div className={styles.container}>
            <img className={styles.backgroundImage} src={homePic} alt={homePic}/>
            <h1 className={styles.enterText}>LOCAL SKILL</h1>
            <h1 className={styles.formHeader}>SEARCH</h1>


            <form  onSubmit={handleSubmit(onSubmit)} className={styles.searchElement}>


                <label htmlFor="formItems">
                <select name="customerGuild" {...register("customerGuild",{ validate: (value) => value !== ""})} className={styles.select}>
                    <option value="">Please choose an Guild....</option>
                    <option value="FINANCE">Finance</option>
                    <option value="CONSTRUCTION">Construction</option>
                    <option value="CREATIVE_DESIGN">Creative design</option>
                    <option value="LEISURE">Leisure</option>
                    <option value="MEDIA">Media</option>
                    <option value="SECURITY">Security</option>
                    <option value="HEALTHCARE">Healthcare</option>
                    <option value="IT">IT</option>
                    <option value="BEAUTY">Beauty</option>
                    <option value="SPORT">Sport</option>
                    <option value="FOOD">Food</option>
                    <option value="HOBBY">Hobby</option>
                    <option value="SALES">Sales</option>
                    <option value="EDUCATION">Education</option>
                    <option value="LOGISTICS">Logistics</option>
                    <option value="LEGAL">Legal</option>
                    <option value="HUMAN_RESOURCES">Human resources</option>
                    <option value="IT">IT</option>
                    <option value="BEAUTY">Beauty</option>
                    <option value="SPORT">Sport</option>
                    <option value="FOOD">Food</option>
                    <option value="HOBBY">Hobby</option>
                    <option value="SALES">Sales</option>
                    <option value="EDUCATION">Education</option>
                    <option value="HEALTHCARE">Healthcare</option>
                </select>
                    {errors.customerGuild  && <span className={styles.errors}>Please specify an Guild..</span>}
                </label>


                <FormInputComponent
                    type="text"
                    className={styles.select}
                    name="areaCode"
                    placeHolder="Insert your area code (for example: 1066SP)"
                    fieldRef={register('areaCode', {
                        required: {
                            value: true,
                            message: 'This field must have an input',
                        },
                        pattern: {
                            value: /([0-9]{4}[A-Z]{2})/,
                            message: 'Please insert a valid area code (with caps)',
                        },
                    })}
                    errors={errors}
                />


                <div className={styles.buttonContainer}>
                <button className={styles.button} type="submit" onClick={handleSubmit}
                        disabled={pristine}
                >Quick search  <img className={styles.img} src={find} alt={find}/></button>
                <button className={styles.button} type="submit" onClick={()=>{history.push("overview")}}>Browse all items <img className={styles.img} src={find} alt={find}/></button>
                </div>

            </form>

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
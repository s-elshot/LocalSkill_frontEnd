import styles from "./home.module.css"
import homePic from "../../assets/desktop/backgrounds/logIn.png";
import React from "react";
import find from "../../assets/mobileIcons/Icon awesome-search@2x.png";
import OverviewComponent from "../../components/object/overviewComponent";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import FormInputComponent from "../../components/forms/FormInputComponent";
import Select from "./HomeSelect";



function Home() {

    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const history = useHistory();

    async function onSubmit(data) {
        console.log(data)
        // history.push(`/overview/${data.itemType}/${data.areaCode}`)
    }



    const selectOptions = [
        // { value: "", label: "" },
        // { value: "FINANCE", label: "Finance" },
        // { value: "CONSTRUCTION", label: "Construction" },
        // { value: "CREATIVE_DESIGN", label: "Creative design" },
        // { value: "LEISURE", label: "Leisure" },
        // { value: "MEDIA", label: "Media" },
        // { value: "SECURITY", label: "Security" },
        // { value: "HEALTHCARE", label: "Healthcare" },
        // { value: "IT" , label: "IT" },
        // { value: "BEAUTY", label: "Beauty" },
        // { value: "SPORT", label: "Sport" },
        // { value: "FOOD", label: "Food" },
        // { value: "HOBBY", label: "Hobby" },
        // { value: "SALES", label: "Sales" },
        // { value: "EDUCATION", label: "Education"},
        // { value: "LOGISTICS", label: "Logistics" },
        // { value: "LEGAL", label: "Legal" },
        // { value: "HUMAN_RESOURCES", label: "Human resources" },
        // { value: "customerGuild", label: "Legal" },
        // { value: "HUMAN_RESOURCES", label: "Human resources" },

    ]



    return (
        <div className={styles.container}>
            <img className={styles.backgroundImage} src={homePic} alt={homePic}/>
            <h1 className={styles.enterText}>LOCAL SKILL</h1>
            <h1 className={styles.formHeader}>SEARCH</h1>


            <form  onSubmit={handleSubmit(onSubmit)} className={styles.searchElement}>



                <select {...register("customerGuild",{ required: true})} className={styles.input}>
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


                {/*<select*/}
                {/*    className={styles.input}>*/}
                {/*    <option value="">Select your option</option>*/}
                {/*    <option value="Hond">female</option>*/}
                {/*    <option value="Kat">male</option>*/}
                {/*    <option value="Fiets">other</option>*/}
                {/*</select>*/}

                {/*<Select*/}
                {/*    option={guildOptions}*/}
                {/*    name="customerGuild"*/}
                {/*    placeholder="Search Guild"*/}
                {/*    fieldRef= {register('customerGuild', {*/}
                {/*        required: {*/}
                {/*            value: true,*/}
                {/*            message: 'This field must be selected',*/}
                {/*        }*/}
                {/*    })}*/}
                {/*    errors={errors}*/}

                {/*/>*/}


                {/*<FormInputComponent*/}
                {/*    type="text"*/}
                {/*    name="itemType"*/}
                {/*    className={styles.input}*/}
                {/*    placeHolder="Search products / services"*/}
                {/*    fieldRef= {register('itemType', {*/}
                {/*        required: {*/}
                {/*            value: true,*/}
                {/*            message: 'This field must have input',*/}
                {/*        }*/}
                {/*        , maxLength: {*/}
                {/*            value: 30,*/}
                {/*            message: 'At most 30 characters can be used to define the first name',*/}
                {/*        }*/}
                {/*    })}*/}
                {/*    errors={errors}*/}
                {/*/>*/}
                {/*/!*<input className={styles.input} type="text" placeholder="Search products / services"/>*!/*/}

                {/*<FormInputComponent*/}
                {/*    type="text"*/}
                {/*    className={styles.input}*/}
                {/*    name="areaCode"*/}
                {/*    placeHolder="Insert your area code (for example: 1066SP)"*/}
                {/*    fieldRef={register('areaCode', {*/}
                {/*        required: {*/}
                {/*            value: true,*/}
                {/*            message: 'This field must have an input',*/}
                {/*        },*/}
                {/*        pattern: {*/}
                {/*            value: /([0-9]{4}[A-Z]{2})/,*/}
                {/*            message: 'Please insert a valid area code (with caps)',*/}
                {/*        },*/}
                {/*    })}*/}
                {/*    errors={errors}*/}
                {/*/>*/}

                {/*<input className={styles.input} type="text" placeholder="Insert your area code"/>*/}
                <div className={styles.buttonContainer}>

                {/*<button className={styles.button} type="submit" onClick={handleSubmit} disabled={pristine}>SPECIFIC SEARCH  <img className={styles.img} src={find} alt={find}/></button>*/}
                <button className={styles.button} type="submit" onClick={()=>{history.push("overview")}}>BROWSE ALL ITEMS  <img className={styles.img} src={find} alt={find}/></button>
                    <button className={styles.button} onClick={handleSubmit}>TIJDELIJK</button>
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
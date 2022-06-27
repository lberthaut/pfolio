import { useState } from "react";
import me from "../datas/personnaldatas"

export default function Usercontent() {

    const [firstname, setFirstname] = useState(me.firstname);
    const [lastname, setLastname] = useState(me.lastname);
    const [age, setAge] = useState(me.age);
    const [city, setCity] = useState(me.city);
    const [job, setJob] = useState(me.job);
    const [cv, setCv] = useState("./data/cv_berthaut_front.pdf")

    return (
        <div className="usercontent_container">
            <div className="background_pic"></div>
            <div className="profilepic_container">
                <img className="profilepic" src="assets/profilepic.jpg" alt="représentation visuelle personnelle" title="me" />
            </div>
            <div className="informations_container">
                <p className="names">{firstname} {lastname}</p>
                <p className="age">{age}</p>
                <p className="city">{city}</p>
                <p className="job">{job}</p>
                <a className="cv_link" href={cv} target="_blank" rel="noreferrer">Curriculum Vitae</a>
            </div>

        </div>
    )
}
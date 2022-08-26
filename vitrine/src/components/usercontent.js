import { useState } from "react";
import me from "../datas/personnaldatas"

export default function Usercontent() {

    const [firstname, setFirstname] = useState(me.firstname);
    const [lastname, setLastname] = useState(me.lastname);
    const [age, setAge] = useState(me.age);
    const [city, setCity] = useState(me.city);
    const [job, setJob] = useState(me.job);
    const [pic, setpic] = useState(me.pic);
    const [cv, setCv] = useState(me.cv)

    return (
        <>
            <div className="usercontent_container">
                <div className="profilepic_container">
                    <img className="profilepic" src={pic} alt="représentation visuelle personnelle" title="me" />
                </div>
                <div className="user_infos">
                    <p className="names">{firstname} {lastname}</p>
                    <p className="age">{age}</p>
                    <p className="city">{city}</p>
                    <p className="job">{job}</p>
                    <a className="cv_link" href={cv} target="_blank" rel="noreferrer">Curriculum Vitae</a>
                </div>
                {/* <i class="fa-solid fa-masks-theater"></i> */}
            </div>
            <div className="modal_renovations">
                <h1 className="renovations">Site en cours de rénovations et nouvelles réalisations !</h1>
            </div>
        </>
    )
}
import React from "react";
import laura from "../assets/laura.png"

export default function Info(){

    return(
        <div>
            <img className="card__img" src={laura} alt="" />
            <div>
                <h1 className="card__title">Laura Smith</h1>
                <h3 className="card__subtitle">Frontend Developer</h3>
                <p className="card__website">laurasmith.website</p>
            </div>
            <div className="card__buttons container">
                <button className="button email__button" placeholder="">
                <i class='bx bxs-envelope'></i>
                Email
                </button>
                <button className="button linkedin__button" placeholder="">
                <i class='bx bxl-linkedin-square' ></i>
                LinkedIn
                </button>
            </div>
        </div>
    )
}
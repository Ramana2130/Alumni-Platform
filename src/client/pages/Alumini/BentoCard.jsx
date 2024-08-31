import React from "react";
import aero from "../../assets/aero.svg";
import eee from "../../assets/eee.svg";
import it from "../../assets/it.svg";
import datascience from "../../assets/datascience.svg";
import cyber from "../../assets/cyber.svg";
import media from "../../assets/media.svg";

const BentoCard = ({ handlePageChange }) => {
  return (
    <div className="grid grid-cols-3 gap-10 mx-24">
      <div class="card" onClick={handlePageChange}>
        <span class="card__title">INFORMATION TECHNOLOGY</span>
        <img src={aero} alt="" className="size-44 mx-auto" />
        <form class="card__form">
          <button class="card__button">Select</button>
        </form>
      </div>
      <div class="card" onClick={handlePageChange}>
        <span class="card__title">COMPUTER SCIENCE ENGINEERING</span>
        <img src={aero} alt="" className="size-44 mx-auto" />
        <form class="card__form">
          <button class="card__button">Select</button>
        </form>
      </div>
      <div class="card" onClick={handlePageChange}>
        <span class="card__title uppercase">cyber security</span>
        <img src={cyber} alt="" className="size-44 mx-auto" />
        <form class="card__form">
          <button class="card__button">Select</button>
        </form>
      </div>
      <div class="card" onClick={handlePageChange}>
        <span class="card__title uppercase">Computer Science Enginnering</span>
        <img src={it} alt="" className="size-44 mx-auto" />
        <form class="card__form">
          <button class="card__button">Select</button>
        </form>
      </div>
      <div class="card" onClick={handlePageChange}>
        <span class="card__title">Aeronautical enginnering</span>
        <img src={aero} alt="" className="size-44 mx-auto" />
        <form class="card__form">
          <button class="card__button">Select</button>
        </form>
      </div>
      <div class="card" onClick={handlePageChange}>
        <span class="card__title">Mechanic Enginnering</span>
        <img src={eee} alt="" className="size-44 mx-auto" />
        <form class="card__form">
          <button class="card__button">Click me</button>
        </form>
      </div>
    </div>
  );
};

export default BentoCard;

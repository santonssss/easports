import React from "react";
import "./Advertising.css";
type Props = {};

const Advertising = (props: Props) => {
  return (
    <div className="advertising">
      <div className="advertising__img-container">
        <div className="advertising__img-container__text">
          <div className="advertising__img-container__text-title">
            <div className="advertising__img-container__text-title__icon">
              <div className="advertising__img-container__text-title__icon-wr">
                <svg
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.97415 16.7772H5.60456L5.53213 17.1397L4.75037 21.0511L4.64262 21.5903H5.19238H13.01C16.4648 21.5903 19.7999 18.8006 20.4879 15.3607C20.8351 13.6247 20.448 12.0196 19.5079 10.8438C18.5671 9.66702 17.0992 8.95426 15.3553 8.95426H13.4009C12.9898 8.95426 12.6785 8.78982 12.4867 8.54989C12.2941 8.30897 12.1955 7.95818 12.2794 7.53744C12.4536 6.66424 13.3268 5.94428 14.1827 5.94428H22.0003H22.3699L22.4423 5.58187L23.2241 1.67037L23.3318 1.13127H22.7821H14.9644C11.5096 1.13127 8.17453 3.92093 7.48655 7.36087C7.13936 9.09684 7.5265 10.7019 8.46656 11.8777C9.40738 13.0545 10.8752 13.7673 12.6191 13.7673H14.5736C14.9847 13.7673 15.296 13.9317 15.4877 14.1716C15.6803 14.4126 15.7789 14.7633 15.695 15.1841C15.5209 16.0573 14.6477 16.7772 13.7918 16.7772H5.97415Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.901518"
                  />
                  <ellipse
                    cx="2.94862"
                    cy="3.53504"
                    rx="2.85633"
                    ry="2.85828"
                    fill="#D21010"
                  />
                </svg>
              </div>
              <span className="advertising__img-container__text-title__icon-sport">
                Велоспорт
              </span>
              <span className="advertising__img-container__text-title__icon-city">
                Москва 2024
              </span>
            </div>
          </div>
          <div className="advertising__img-container__text-desc">
            <h4>
              Тур Альп-2024 <br />
              Этап 3
            </h4>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Advertising;

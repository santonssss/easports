import React from "react";
import RibbonTitle from "../RibbonTitle/RibbonTitle";
import "./Filter.css";
type Props = {};

const Filter = (props: Props) => {
  return (
    <div className="filter">
      <RibbonTitle text="Фильтр ленты" />
      <div className="filter__btns">
        <button>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 1.5H2.83333C2.36662 1.5 2.13327 1.5 1.95501 1.59083C1.79821 1.67072 1.67072 1.79821 1.59083 1.95501C1.5 2.13327 1.5 2.36662 1.5 2.83333V6C1.5 6.46671 1.5 6.70007 1.59083 6.87833C1.67072 7.03513 1.79821 7.16261 1.95501 7.24251C2.13327 7.33333 2.36662 7.33333 2.83333 7.33333H6C6.46671 7.33333 6.70007 7.33333 6.87833 7.24251C7.03513 7.16261 7.16261 7.03513 7.24251 6.87833C7.33333 6.70007 7.33333 6.46671 7.33333 6V2.83333C7.33333 2.36662 7.33333 2.13327 7.24251 1.95501C7.16261 1.79821 7.03513 1.67072 6.87833 1.59083C6.70007 1.5 6.46671 1.5 6 1.5Z"
              stroke="#9395B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="filter__btn-path"
            />
            <path
              d="M15.1667 1.5H12C11.5333 1.5 11.2999 1.5 11.1217 1.59083C10.9649 1.67072 10.8374 1.79821 10.7575 1.95501C10.6667 2.13327 10.6667 2.36662 10.6667 2.83333V6C10.6667 6.46671 10.6667 6.70007 10.7575 6.87833C10.8374 7.03513 10.9649 7.16261 11.1217 7.24251C11.2999 7.33333 11.5333 7.33333 12 7.33333H15.1667C15.6334 7.33333 15.8667 7.33333 16.045 7.24251C16.2018 7.16261 16.3293 7.03513 16.4092 6.87833C16.5 6.70007 16.5 6.46671 16.5 6V2.83333C16.5 2.36662 16.5 2.13327 16.4092 1.95501C16.3293 1.79821 16.2018 1.67072 16.045 1.59083C15.8667 1.5 15.6334 1.5 15.1667 1.5Z"
              stroke="#9395B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="filter__btn-path"
            />
            <path
              d="M15.1667 10.6667H12C11.5333 10.6667 11.2999 10.6667 11.1217 10.7575C10.9649 10.8374 10.8374 10.9649 10.7575 11.1217C10.6667 11.2999 10.6667 11.5333 10.6667 12V15.1667C10.6667 15.6334 10.6667 15.8667 10.7575 16.045C10.8374 16.2018 10.9649 16.3293 11.1217 16.4092C11.2999 16.5 11.5333 16.5 12 16.5H15.1667C15.6334 16.5 15.8667 16.5 16.045 16.4092C16.2018 16.3293 16.3293 16.2018 16.4092 16.045C16.5 15.8667 16.5 15.6334 16.5 15.1667V12C16.5 11.5333 16.5 11.2999 16.4092 11.1217C16.3293 10.9649 16.2018 10.8374 16.045 10.7575C15.8667 10.6667 15.6334 10.6667 15.1667 10.6667Z"
              stroke="#9395B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="filter__btn-path"
            />
            <path
              d="M6 10.6667H2.83333C2.36662 10.6667 2.13327 10.6667 1.95501 10.7575C1.79821 10.8374 1.67072 10.9649 1.59083 11.1217C1.5 11.2999 1.5 11.5333 1.5 12V15.1667C1.5 15.6334 1.5 15.8667 1.59083 16.045C1.67072 16.2018 1.79821 16.3293 1.95501 16.4092C2.13327 16.5 2.36662 16.5 2.83333 16.5H6C6.46671 16.5 6.70007 16.5 6.87833 16.4092C7.03513 16.3293 7.16261 16.2018 7.24251 16.045C7.33333 15.8667 7.33333 15.6334 7.33333 15.1667V12C7.33333 11.5333 7.33333 11.2999 7.24251 11.1217C7.16261 10.9649 7.03513 10.8374 6.87833 10.7575C6.70007 10.6667 6.46671 10.6667 6 10.6667Z"
              stroke="#9395B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="filter__btn-path"
            />
          </svg>
          Все
        </button>
        <button>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.41667 16.6641H3.16667C2.24619 16.6641 1.5 15.9179 1.5 14.9974V3.33073C1.5 2.41025 2.24619 1.66406 3.16667 1.66406H14.8333C15.7538 1.66406 16.5 2.41025 16.5 3.33073V14.9974C16.5 15.9179 15.7538 16.6641 14.8333 16.6641H13.5833M9 15.8307C10.3807 15.8307 11.5 14.7114 11.5 13.3307C11.5 11.95 10.3807 10.8307 9 10.8307C7.61929 10.8307 6.5 11.95 6.5 13.3307C6.5 14.7114 7.61929 15.8307 9 15.8307ZM9 15.8307L9.01787 15.8306L6.35723 18.4912L4.0002 16.1342L6.51638 13.618M9 15.8307L11.6607 18.4912L14.0177 16.1342L11.5015 13.618M6.5 4.9974H11.5M4.83333 7.91406H13.1667"
              stroke="#9395B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="filter__btn-path"
            />
          </svg>{" "}
          Результаты
        </button>
        <button>
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3332 4.44411C18.3332 3.93926 18.3332 3.68684 18.2333 3.56995C18.1467 3.46853 18.0168 3.41471 17.8838 3.42518C17.7306 3.43724 17.5521 3.61573 17.1951 3.97271L14.1665 7.0013L17.1951 10.0299C17.5521 10.3869 17.7306 10.5654 17.8838 10.5774C18.0168 10.5879 18.1467 10.5341 18.2333 10.4327C18.3332 10.3158 18.3332 10.0633 18.3332 9.55849V4.44411Z"
              stroke="#9395B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="filter__btn-path"
            />
            <path
              d="M1.6665 5.16797C1.6665 3.76784 1.6665 3.06777 1.93899 2.53299C2.17867 2.06259 2.56112 1.68014 3.03153 1.44045C3.56631 1.16797 4.26637 1.16797 5.6665 1.16797H10.1665C11.5666 1.16797 12.2667 1.16797 12.8015 1.44045C13.2719 1.68014 13.6543 2.06259 13.894 2.53299C14.1665 3.06777 14.1665 3.76784 14.1665 5.16797V8.83464C14.1665 10.2348 14.1665 10.9348 13.894 11.4696C13.6543 11.94 13.2719 12.3225 12.8015 12.5622C12.2667 12.8346 11.5666 12.8346 10.1665 12.8346H5.6665C4.26637 12.8346 3.56631 12.8346 3.03153 12.5622C2.56112 12.3225 2.17867 11.94 1.93899 11.4696C1.6665 10.9348 1.6665 10.2348 1.6665 8.83464V5.16797Z"
              stroke="#9395B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="filter__btn-path"
            />
          </svg>
          Видео
        </button>
        <button>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.94596 9.32545L1.77533 3.65173C1.41076 2.99934 1.22847 2.67315 1.25919 2.40607C1.286 2.17306 1.40975 1.96213 1.60008 1.82507C1.81824 1.66797 2.19191 1.66797 2.93926 1.66797H4.80161C5.07935 1.66797 5.21823 1.66797 5.34279 1.70808C5.45302 1.74357 5.55463 1.80165 5.64116 1.8786C5.73895 1.96557 5.80944 2.08522 5.95041 2.32453L9.00009 7.5013L12.0498 2.32453C12.1907 2.08522 12.2612 1.96557 12.359 1.8786C12.4455 1.80165 12.5472 1.74357 12.6574 1.70808C12.7819 1.66797 12.9208 1.66797 13.1986 1.66797H15.0609C15.8083 1.66797 16.1819 1.66797 16.4001 1.82507C16.5904 1.96213 16.7142 2.17306 16.741 2.40607C16.7717 2.67315 16.5894 2.99934 16.2248 3.65173L13.0542 9.32545M7.75009 11.668L9.00009 10.8346V15.0013M7.95842 15.0013H10.0418M12.8303 9.0878C14.9456 11.2031 14.9456 14.6328 12.8303 16.7481C10.7149 18.8635 7.28527 18.8635 5.16992 16.7481C3.05459 14.6328 3.05459 11.2032 5.16992 9.0878C7.28526 6.97247 10.7149 6.97247 12.8303 9.0878Z"
              stroke="#9395B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="filter__btn-path"
            />
          </svg>
          Достижение
        </button>
      </div>
    </div>
  );
};

export default Filter;

import React, { useState } from "react";
import "./RibbonComments.css";
import CommentWrapper from "../Comment/CommentWrapper";
import image_profile from "../../images/image_profile.png";
import CustomButton from "../Button/CustomButton";
const RibbonComments = () => {
  const [visibleCommentsCount, setVisibleCommentsCount] = useState(2);
  const comments = [
    {
      profileImage: image_profile,
      username: "Вадим Давыдов",
      commentText: "Наконец-то! Рад, что он вернулся в спорт",
      timestamp: "20 минут назад",
      replies: [
        {
          profileImage: image_profile,
          username: "Артем Еременко",
          text: "Вадим, согласен! Уже давно ждал интервью!",
          timestamp: "18 минут назад",
        },
        {
          profileImage: image_profile,
          username: "Анна Иванова",
          text: "Да, это отличные новости!",
          timestamp: "15 минут назад",
        },
      ],
    },
    {
      profileImage: image_profile,
      username: "Константин Романов",
      commentText:
        "Похоже на шутку. В его возвращении нет ничего плохого, но лучше бои местного масштаба, уверен соперники найдутся, Кудряшов например или Романов, на крайняк Тищенко.",
      timestamp: "30 минут назад",
    },
    {
      profileImage: image_profile,
      username: "Екатерина Петрова",
      commentText:
        "Интересно, как долго он планирует оставаться в спорте на этот раз.",
      timestamp: "1 час назад",
      replies: [
        {
          profileImage: image_profile,
          username: "Сергей Смирнов",
          text: "Екатерина, думаю, надолго. Он выглядит готовым!",
          timestamp: "50 минут назад",
        },
      ],
    },
    {
      profileImage: image_profile,
      username: "Александр Кузнецов",
      commentText:
        "Мне кажется, что ему следует начать с небольших боёв, чтобы вернуть форму.",
      timestamp: "2 часа назад",
    },
  ];
  const handleShowAllComments = () => {
    setVisibleCommentsCount(comments.length);
  };
  return (
    <div className="comments">
      <div className="comments__view">
        <div className="comments__view-wr">
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.69654 7.26867C1.63897 7.09594 1.63891 6.90895 1.69638 6.73619C2.85335 3.2581 6.13424 0.75 10.0009 0.75C13.8658 0.75 17.1454 3.25577 18.3038 6.73134C18.3614 6.90406 18.3615 7.09106 18.304 7.26381C17.147 10.7419 13.8661 13.25 9.99946 13.25C6.13458 13.25 2.85494 10.7442 1.69654 7.26867Z"
              stroke="#9395B8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5002 7C12.5002 8.38071 11.381 9.5 10.0002 9.5C8.61953 9.5 7.50025 8.38071 7.50025 7C7.50025 5.61929 8.61953 4.5 10.0002 4.5C11.381 4.5 12.5002 5.61929 12.5002 7Z"
              stroke="#9395B8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          4.1 K
        </div>
        <div className="comments__view-wr">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 5.5C1.5 4.09987 1.5 3.3998 1.77248 2.86502C2.01217 2.39462 2.39462 2.01217 2.86502 1.77248C3.3998 1.5 4.09987 1.5 5.5 1.5H12.5C13.9001 1.5 14.6002 1.5 15.135 1.77248C15.6054 2.01217 15.9878 2.39462 16.2275 2.86502C16.5 3.3998 16.5 4.09987 16.5 5.5V10C16.5 11.4001 16.5 12.1002 16.2275 12.635C15.9878 13.1054 15.6054 13.4878 15.135 13.7275C14.6002 14 13.9001 14 12.5 14H10.4031C9.88308 14 9.62306 14 9.37435 14.051C9.15369 14.0963 8.94017 14.1712 8.73957 14.2737C8.51347 14.3892 8.31043 14.5517 7.90434 14.8765L5.91646 16.4668C5.56973 16.7442 5.39636 16.8829 5.25045 16.8831C5.12356 16.8832 5.00352 16.8255 4.92436 16.7263C4.83333 16.6123 4.83333 16.3903 4.83333 15.9463V14C4.05836 14 3.67087 14 3.35295 13.9148C2.49022 13.6836 1.81635 13.0098 1.58519 12.147C1.5 11.8291 1.5 11.4416 1.5 10.6667V5.5Z"
              stroke="#9395B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          4
        </div>
      </div>
      <div className="comments__list">
        {comments.slice(0, visibleCommentsCount).map((comment, index) => (
          <CommentWrapper
            key={index}
            profileImage={comment.profileImage}
            username={comment.username}
            commentText={comment.commentText}
            timestamp={comment.timestamp}
            replies={comment.replies}
          />
        ))}
        {visibleCommentsCount < comments.length && (
          <CustomButton
            text="Смотреть все комментарии"
            onClick={handleShowAllComments}
          />
        )}
      </div>
    </div>
  );
};

export default RibbonComments;

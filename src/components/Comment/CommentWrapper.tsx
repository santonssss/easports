import React from "react";
import "./CommentWrapper.css";

type CommentData = {
  profileImage: string;
  username: string;
  commentText: string;
  timestamp: string;
  replies?: {
    profileImage: string;
    username: string;
    text: string;
    timestamp: string;
  }[];
};

const CommentWrapper = ({
  profileImage,
  username,
  commentText,
  timestamp,
  replies = [],
}: CommentData) => {
  return (
    <div className="comment">
      <img
        src={profileImage}
        alt="Profile"
        className="comment__profile-image"
      />
      <div className="comment__content">
        <div className="comment__header">
          <span className="comment__username">{username}</span>
        </div>
        <p className="comment__text">{commentText}</p>
        <div className="comment__reply-input">
          <span className="comment__timestamp">{timestamp}</span>
          <button>Ответить</button>
        </div>
        {replies.length > 0 && (
          <div className="comment__replies">
            {replies.map((reply, index) => (
              <div key={index} className="comment__reply">
                <img
                  src={reply.profileImage}
                  alt="Profile"
                  className="comment__reply-profile-image"
                />
                <div className="comment__reply-content">
                  <span className="comment__reply-username">
                    {reply.username}
                  </span>
                  <span className="comment__reply-text">{reply.text}</span>
                  <div className="comment__reply-input">
                    <span className="comment__timestamp">{timestamp}</span>
                    <button>Ответить</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentWrapper;

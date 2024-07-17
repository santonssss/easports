import React from "react";
import "./PublicationDate.css";
type Props = {
  title: string;
  date: string;
};

const PublicationDate = ({ date, title }: Props) => {
  return (
    <div className="publicationDate">
      {title} <div className="circle" />
      <time dateTime="">{date}</time>
    </div>
  );
};

export default PublicationDate;

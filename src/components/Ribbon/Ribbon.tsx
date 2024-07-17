import React from "react";
import PublicationDate from "../PublicationDate/PublicationDate";
import RibbonTitle from "../RibbonTitle/RibbonTitle";
import RibbonDescription from "../RibbonDescription/RibbonDescription";
import RibbonImageWrapper from "../RibbonImageWrapper/RibbonImageWrapper";
import RibbonComments from "../RibbonComments/RibbonComments";

type Props = {};

const Ribbon = (props: Props) => {
  return (
    <div className="ribbon">
      <PublicationDate
        title="Спортивная борьба"
        date="12 марта, 2024 в 16:03"
      />
      <RibbonTitle text="Илья Бессонов дал интервью для телеканала Россия-1" />
      <RibbonDescription text="Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал о методиках своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и " />
      <RibbonImageWrapper />
      <RibbonComments />
    </div>
  );
};

export default Ribbon;

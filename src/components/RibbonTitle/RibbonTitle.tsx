import "./RibbonTitle.css";
type Props = {
  text: string;
};

const RibbonTitle = ({ text }: Props) => {
  return <h3 className="ribbonTitle">{text}</h3>;
};

export default RibbonTitle;

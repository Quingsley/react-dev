import "./Card.css";
type CardProps = {
  children: React.ReactNode;
  className: string;
};

function Card(props: CardProps) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

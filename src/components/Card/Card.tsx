import "./Card.css";

interface Props {
  title: string;
  children: any;
}

function Card({ title, children }: Props) {
  return (
    <div className='Card'>
      <h4> {title} </h4>

      {children}
    </div>
  );
}

export default Card;

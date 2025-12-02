import "./Card.scss";

type Props = {
  title: string;
  id: number;
};

export default function Card({ title, id }: Props) {
  return (
    <div className="card">
      {id}. {title}
    </div>
  );
}

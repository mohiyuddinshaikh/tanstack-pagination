import "./CardSkeleton.scss";

interface Props {
  base?: number;
}

export default function CardSkeleton({ base = 10 }: Props) {
  return (
    <>
      {Array.from({ length: base }).map((_, index) => (
        <div key={index} className="card_skeleton">
          <div className="skel-line full"></div>
        </div>
      ))}
    </>
  );
}

import CardSkeleton from "../CardSkeleton";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loading">
      <CardSkeleton base={10} />
    </div>
  );
}

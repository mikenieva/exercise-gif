import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-lg p-4"
        >
          <Skeleton height={200} />
          <Skeleton count={2} />
        </div>
      ))}
    </div>
  );
};

export default Loader;

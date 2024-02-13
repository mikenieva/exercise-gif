import { GifObject } from "../interfaces/interfaces";
import ImageComponent from "./ImageComponent";

interface GifListProps {
  gifs: GifObject[];
}

const GifList: React.FC<GifListProps> = ({ gifs }) => {
  return (
    <div className="flex items-center justify-center flex-wrap">
      {gifs.map((gif) => (
        <ImageComponent
          key={gif.id}
          imageDetailUrl={gif.images.preview_gif.url}
        />
      ))}
    </div>
  );
};

export default GifList;

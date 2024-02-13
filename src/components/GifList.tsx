import React from "react";
import { GifObject } from "../interfaces/interfaces";

interface GifListProps {
  gifs: GifObject[];
}

const GifList: React.FC<GifListProps> = ({ gifs }) => {
  return (
    <div
      role="list"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
    >
      {gifs.map((gif) => (
        <div
          key={gif.id}
          role="listitem"
          className="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <img
            src={gif.images.fixed_height.url}
            alt={gif.title}
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{gif.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GifList;

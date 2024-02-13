interface ImageProps {
  imageDetailUrl: string;
}

const ImageComponent: React.FC<ImageProps> = ({ imageDetailUrl }) => {
  return <img src={imageDetailUrl} alt="" />;
};

export default ImageComponent;

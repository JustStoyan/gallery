import { ImageData } from "./Image";

export const ImageInfo = ({ alt,photographer }: ImageData) => {
    console.log(photographer)
  return (
    <div>
      <h2>Name/Alt: {alt ? alt : "Untitled"}</h2>
      <h4>Photographer: {photographer}</h4>
    </div>
  );
};

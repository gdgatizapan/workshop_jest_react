interface IImage {
  image: string;
  className: string;
}

export function Image({ image, className }: IImage) {
  return <img src={image} className={className} />;
}

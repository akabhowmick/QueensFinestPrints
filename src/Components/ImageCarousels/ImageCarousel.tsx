import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface ImageForCarousel {
  original: string;
  thumbnail: string;
  originalAlt: string;
  thumbnailAlt: string;
}

export const ImageCarousel = ({ images, name }: { images: string[]; name: string }) => {
  const imageArray: ImageForCarousel[] = images.map((image, index) => ({
    original: image,
    thumbnail: image,
    originalAlt: `${name} — image ${index + 1} of ${images.length}`,
    thumbnailAlt: `${name} thumbnail ${index + 1}`,
  }));
  return (
    <div className="hero-images">
      <ImageGallery items={imageArray} showBullets lazyLoad />
    </div>
  );
};

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageCarousel.css";

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
    <div className="gallery">
      <ImageGallery
        items={imageArray}
        lazyLoad
        showPlayButton={false}
        showBullets={false}
        showNav={images.length > 1}
        showThumbnails={images.length > 1}
      />
    </div>
  );
};

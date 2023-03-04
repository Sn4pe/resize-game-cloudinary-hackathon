import { Cloudinary } from '@cloudinary/url-gen';
import { Resize } from '@cloudinary/url-gen/actions';

const cloudinary = new Cloudinary({ cloud: { cloudName: 'sn4pe' } });

export const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const calculatePercentage = (
  realWidth,
  realHeight,
  guessedWidth,
  guessedHeight
) => {
  const realArea = parseInt(realWidth) * parseInt(realHeight);
  const guessedArea = parseInt(guessedWidth) * parseInt(guessedHeight);
  let percentage = ((guessedArea / realArea) * 100).toFixed(0);

  if (parseFloat(percentage) > 100) {
    percentage = (100 - (parseFloat(percentage) - 100)).toFixed(0);
  }

  return `${percentage}%`;
};

const imageUrls: string[] = [
  'https://pbs.twimg.com/profile_images/1613612257015128065/oA0Is67J_400x400.jpg',
  'https://pbs.twimg.com/profile_images/1611473726754660353/ZcnFMqR__400x400.jpg',
];

export const generateImageUrl = (width: number, height: number): string => {
  const randomIndex = randomInt(0, imageUrls.length - 1);
  const imageUrl = imageUrls[randomIndex];
  return cloudinary
    .image(imageUrl)
    .setDeliveryType('fetch')
    .resize(Resize.fill().width(width).height(height))
    .quality('auto')
    .toURL();
};

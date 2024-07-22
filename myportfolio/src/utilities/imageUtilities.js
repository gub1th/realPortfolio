import smartcrop from 'smartcrop';

export const cropImage = (imageUrl, size) => {
  return new Promise((resolve, reject) => {
    smartcrop.crop(imageUrl, size).then(function(result) {
      const { x, y, height, width } = result.topCrop;
      resolve({ x, y, height, width });
    }).catch(reject);
  });
};
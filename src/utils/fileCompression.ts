// 프로필 사진의 크기가 너무 커서, localStorage에 overflow가 발생하는 것을 방지하기 위한 압축 기능

import imageCompression from 'browser-image-compression';

export const CompressImage = async (image: File) => {
  const options = {
    maxSizeMB: 0.01,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };
  const compressedFile = await imageCompression(image, options);
  return compressedFile;
};

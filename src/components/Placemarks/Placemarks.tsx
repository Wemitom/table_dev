import { useEffect, useState } from 'react';

import { Placemark } from '@pbe/react-yandex-maps';

import { RestarauntInfo } from '../ChooseRestaurant/interfaces';

const Placemarks = ({
  restarauntInfo,
}: {
  restarauntInfo: RestarauntInfo[];
}) => {
  const [iconsSize, setIconsSize] = useState(
    Array(restarauntInfo.length).fill([30, 42])
  );

  useEffect(() => {
    setIconsSize([...Array(restarauntInfo.length).fill([30, 42])]);
  }, [restarauntInfo]);

  return (
    <>
      {restarauntInfo.map(
        (info, index) =>
          info.coords.length === 2 && (
            <Placemark
              key={`placemark at ${info.coords}`}
              geometry={info.coords}
              options={{
                iconLayout: 'default#image',
                iconImageHref: '/img/svg/icon-bell.svg',
                iconImageSize: iconsSize[index],
                iconImageOffset: [-3, -42],
              }}
              onMouseEnter={() =>
                setIconsSize([
                  ...iconsSize.map((size, i) => {
                    if (i === index) {
                      return size.map((dim: number) => dim * 1.5);
                    } else {
                      return size;
                    }
                  }),
                ])
              }
              onMouseLeave={() =>
                setIconsSize([
                  ...iconsSize.map((size, i) => {
                    if (i === index) {
                      return size.map((dim: number) => (dim * 2) / 3);
                    } else {
                      return size;
                    }
                  }),
                ])
              }
            />
          )
      )}
    </>
  );
};

export default Placemarks;

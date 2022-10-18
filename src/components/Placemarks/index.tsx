import { useEffect, useState } from 'react';

import { Placemark } from '@pbe/react-yandex-maps';

import { ChooseRestarauntResult } from '../ChooseRestaurant/interfaces';

const Placemarks = ({
  restarauntsResult,
}: {
  restarauntsResult: ChooseRestarauntResult[];
}) => {
  const [iconsSize, setIconsSize] = useState(
    Array(restarauntsResult.length).fill([30, 42])
  );

  useEffect(() => {
    setIconsSize([...Array(restarauntsResult.length).fill([30, 42])]);
  }, [restarauntsResult]);

  return (
    <>
      {restarauntsResult.map((result, index) => (
        <Placemark
          key={`placemark at [${result.location_long}; ${result.location_lat}]`}
          geometry={[+result.location_long, +result.location_lat]}
          options={{
            // iconLayout: 'default#image',
            //iconImageSize: iconsSize[index],
            iconImageOffset: [-3, -42],
          }}
          // onMouseEnter={() =>
          //   setIconsSize([
          //     ...iconsSize.map((size, i) => {
          //       if (i === index) {
          //         return size.map((dim: number) => dim * 1.5);
          //       } else {
          //         return size;
          //       }
          //     }),
          //   ])
          // }
          // onMouseLeave={() =>
          //   setIconsSize([
          //     ...iconsSize.map((size, i) => {
          //       if (i === index) {
          //         return size.map((dim: number) => (dim * 2) / 3);
          //       } else {
          //         return size;
          //       }
          //     }),
          //   ])
          // }
        />
      ))}
    </>
  );
};

export default Placemarks;

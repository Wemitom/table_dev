import { Placemark } from '@pbe/react-yandex-maps';
import { RestarauntInfo } from '../ChooseRestaurant/interfaces';

const Placemarks = ({
  restarauntInfo,
}: {
  restarauntInfo: RestarauntInfo[];
}) => {
  return (
    <>
      {restarauntInfo.map(
        (info) =>
          info.coords.length === 2 && (
            <Placemark
              key={`placemark at ${info.coords}`}
              geometry={info.coords}
            />
          )
      )}
    </>
  );
};

export default Placemarks;

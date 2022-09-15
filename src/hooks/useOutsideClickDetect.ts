import { MutableRefObject, useEffect } from 'react';

function isNode(event: EventTarget | null): asserts event is Node {
  if (!event || !('nodeType' in event)) {
    throw new Error('Node expected');
  }
}

const useOutsideClickDetect = (
  ref: MutableRefObject<HTMLDivElement | null>,
  func: Function
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      isNode(event.target);
      if (ref.current && !ref.current.contains(event.target)) {
        func();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideClickDetect;

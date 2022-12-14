import { useEffect, ReactNode } from 'react';

import { createPortal } from 'react-dom';

const Portal = ({ children }: { children: ReactNode }) => {
  const mount = document.getElementById('root-portal');
  const el = document.createElement('div');

  useEffect(() => {
    mount?.appendChild(el);
    return () => {
      mount?.removeChild(el);
    };
  }, [el, mount]);

  return createPortal(children, el);
};

export default Portal;

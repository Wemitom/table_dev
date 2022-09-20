import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

// Компонент, который при добавлении в роут вызовет скролл наверх страницы
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
}

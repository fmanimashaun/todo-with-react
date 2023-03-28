import { useEffect } from 'react';

const useOnClickOutside = (ref, currentState, updater) => {
  useEffect(() => {
    const handlerClick = (event) => {
      if (currentState && ref.current && !ref.current.contains(event.target)) {
        updater();
      }
    };
    document.addEventListener('click', handlerClick);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('click', handlerClick);
    };
  }, [ref, currentState, updater]);
};

export default useOnClickOutside;

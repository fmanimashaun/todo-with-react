import { useState, useRef } from 'react';
import useOnClickOutside from 'utils/useOnClickOutside';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();

  useOnClickOutside(ref, isOpen, () => setIsOpen(false));
  return (
    <div ref={ref} className="modal">
      <button type="button" onClick={() => setIsOpen(true)}>
        Modal
      </button>
      {isOpen && (
        <div className="modalContent">
          <button type="button" onClick={() => setIsOpen(false)}>
            X
          </button>
          <div>Modal content here</div>
        </div>
      )}
    </div>
  );
};

export default Modal;

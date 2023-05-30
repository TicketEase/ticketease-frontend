import React, { useState } from 'react';
import './LogInSlide.css';

function LogInSlide() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Select an option');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 27) {
      setIsOpen(false);
    }
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.dropdown > .caption')) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keyup', handleKeyPress);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('keyup', handleKeyPress);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div className="caption" onClick={toggleDropdown}>
        {selectedItem}
      </div>
      <div className="list">
        <div className="item" onClick={() => selectItem('Option 1')}>
          Log in as customer 
        </div>
        <div className="item" onClick={() => selectItem('Option 2')}>
          Log in as agent 
        </div>
        <div className="item" onClick={() => selectItem('Option 3')}>
          Log in as employee
        </div>
      </div>
    </div>
  );
}

export default LogInSlide;

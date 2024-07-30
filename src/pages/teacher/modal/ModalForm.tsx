// ModalComponent.js
import React from 'react';

import { Modal } from 'antd';
import useModalStore from '../../../stateMangment/model';


const ModalComponent = () => {
    
  const { isOpen, toggleModal } = useModalStore();

  return (
    <Modal open={isOpen} onClose={toggleModal}>
      <h2>Hello</h2>
      <button onClick={toggleModal}>Close Modal</button>
    </Modal>
  );
};

export default ModalComponent;
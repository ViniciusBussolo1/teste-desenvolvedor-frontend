import React from 'react';
import Modal from './Modal';

interface CreateModalProps extends ModalProps {
  ItemName: string;
}

const CreateModal: React.FC<CreateModalProps> = ({ isOpen, onClose, onSubmit, ErrorMessage, ItemName }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      ErrorMessage={ErrorMessage}
      Title={`Criar ${ItemName}`}
    >
      {/* Componentes para criar um novo item */}
    </Modal>
  );
};

export default CreateModal;
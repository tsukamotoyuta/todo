import React from 'react';
import Modal from 'react-modal';
import "./components.css";

const ModalComponent = ({ isOpen, title, content, onClose }) => {

  const create = () => {
    window.location.href = '/create';
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      className="modal"
    >
      <h2>{title}のイベント</h2>
      <p>{content.start ? `${content.start.split('T')[1].split(':').slice(0, 2).join(':')} ${content.title}` : content.title}</p> 
      <button onClick={create}>予定を追加</button>
      <button onClick={onClose}>閉じる</button>
    </Modal>
  );
}

export default ModalComponent;

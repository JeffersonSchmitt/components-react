import Modal from "../components/Modal";
import Button from './../components/Button';
import { useState } from 'react';

function ModalPage() {
  const [showModal, SetShowModal] = useState(false);

  const handleClick = () => {
    SetShowModal(true);
  }

  const handleClose = () => {
    SetShowModal(false);
  }
  const actionBar = <div>
    <Button primary onClick={handleClose}>Aceitar</Button>
  </div>

  const modal = <Modal
    onClose={handleClose}
    actionBar={actionBar}
  >
    <p>
      Uma parada séria pra você aceitar
    </p>
  </Modal>

  return (
    <div>
      <Button onClick={handleClick} primary>Open modal</Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
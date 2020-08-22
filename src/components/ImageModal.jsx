import * as React from 'react';
import { Modal } from 'react-bootstrap';
import './ImageModal.css';

const ImageModal = (props) => {
 return (
  <Modal
     {...props}
      size="md"
      centered
      >
      <Modal.Body>
        <img className="ImageSize" alt={props.image.description} src={props.image.urls.regular} />
      </Modal.Body>
    </Modal>
  );
 };

export default ImageModal;
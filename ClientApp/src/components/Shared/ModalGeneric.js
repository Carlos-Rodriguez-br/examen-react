import React from 'react';
import PropTypes from 'prop-types';
import { ModalHeader, ModalBody, ModalFooter, Modal, Button } from 'reactstrap';
const ModalGeneric = (props) => {
    // const [isLoading,setIsLoading]=useState(false);
    const { title, closeModal, openModal, children } = props;
    return (<Modal isOpen={openModal} toogle={closeModal} size="lg">
        <ModalHeader toogle={closeModal}>{title}</ModalHeader>
        <ModalBody>
            {children}
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={closeModal}>Cerrar</Button>
        </ModalFooter>
    </Modal>);
}

ModalGeneric.propTypes = {
    openModal: PropTypes.bool,
    closeModal: PropTypes.func,
    title: PropTypes.string,
}

export default ModalGeneric;
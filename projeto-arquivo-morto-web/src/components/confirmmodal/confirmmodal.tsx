"use client";

import { Modal } from "antd";
import { useState, forwardRef, useImperativeHandle } from "react";

type ConfirmActionModalProps = {
  onConfirmAction: () => void;
  onCancelAction?: () => void;
  title: string;
  message: string;
};

export type ConfirmModalRef = {
  show: () => void;
  hide: () => void;
};

const ConfirmModal = forwardRef<ConfirmModalRef, ConfirmActionModalProps>(
  ({ onConfirmAction, onCancelAction, title, message }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const show = () => {
      setIsModalOpen(true);
    };

    const hide = () => {
      setIsModalOpen(false);
    };

    useImperativeHandle(ref, () => ({
      show,
      hide,
    }));

    const handleOk = () => {
      onConfirmAction();
      hide();
    };

    const handleCancel = () => {
      if (onCancelAction) {
        onCancelAction();
      }
      hide();
    };

    return (
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Confirmar"
        cancelText="Cancelar"
      >
        <p>{message}</p>
      </Modal>
    );
  }
);

ConfirmModal.displayName = "ConfirmModal";
export default ConfirmModal;

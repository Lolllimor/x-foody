"use client";
import { Modal } from "@mantine/core";
import { Context, ReactNode, createContext, useState } from "react";

export interface IModalContext {
  setModalState: React.Dispatch<React.SetStateAction<IModalState>>;
  modalState: IModalState;
  close: () => void;
  activeModal: number;
  setActiveModal: React.Dispatch<React.SetStateAction<number>>;
}

interface IModalState {
  opened: boolean;
  component: null | ReactNode;
  id?: null | string | number;
  onClose?: () => void;
}

export const ModalContext = createContext<IModalContext | null>(
  null
) as Context<IModalContext>;
const initialvalues = {
  opened: false,
  component: null,
  id: null,
  onclose: () => {},
};

function ModalProvider({ children }: { children: any }) {
  const [modalState, setModalState] = useState<IModalState>(initialvalues);
  const [activeModal, setActiveModal] = useState<number>(0);
  const close = () => {
    setModalState(initialvalues);
  };

  return (
    <>
      <ModalContext.Provider
        value={{
          setModalState,
          modalState,
          close,
          activeModal,
          setActiveModal,
        }}
      >
        <Modal
          opened={modalState.opened}
          withCloseButton={false}
          classNames={{
            content: "rounded-2xl flex flex-col ",
            root: "flex",
            body: "m-0 p-0 rounded-2xl overflow-auto flex-1 flex flex-col",
            header: "m-0 p-0",
          }}
          centered
          size="auto"
          onClose={() => {
            setModalState({
              opened: false,
              component: null,
            });
            if (modalState.onClose) modalState.onClose();
          }}
          styles={{
            overlay: {
              backgroundColor: "#FFFFFF80",
              backdropFilter: "blur(2px)",
            },
            body: {
              padding: 0,
              margin: 0,
              overflow: "auto",
            },
            header: {
              padding: 0,
              margin: 0,
            },
            content: {
              overflowY: "unset !important" as any,
              borderRadius: "16px",
              display: "flex",
            },
          }}
        >
          {modalState.component}
        </Modal>
        {children}
      </ModalContext.Provider>
    </>
  );
}

export default ModalProvider;

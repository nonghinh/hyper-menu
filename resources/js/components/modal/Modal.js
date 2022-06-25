import ReactDOM from "react-dom";
import React from "react";
import styled from "styled-components";
import {IconClose} from "../../data/icons";

const ModalOverlay = styled.div.attrs({className: 'm-overlay'})`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.6);
  z-index: 99;
  width: 100%;
  height: 100%;
`;

const ModalWrapper = styled.div.attrs({className: 'm-wrapper'})`
  width: 1000px;
  height: 500px;
  background-color: #ffffff;
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  border-radius: 3px;
`;

const ModalHeader = styled.div`
  min-height: 50px;
  display: flex;
  position: relative;
  padding: 1rem;
`;
const ModalTitle = styled.h4`
  font-size: 18px;
`;
const ModalDismiss = styled.button.attrs({ariaLabel: "Close"})`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: transparent;
  border: none;
`;
const ModalContent = styled.div`
  padding: 1rem;
  max-height: calc(100vh - 200px);
  overflow: auto;
`;
function Modal({ isShowing, hide, children, title }){
    return isShowing ? ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={hide} />
            <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
                    <ModalHeader>
                        <ModalTitle>{title}</ModalTitle>
                        <ModalDismiss onClick={hide}>
                            <span aria-hidden="true">
                                <IconClose />
                            </span>
                        </ModalDismiss>
                    </ModalHeader>
                    <ModalContent>
                        {children}
                    </ModalContent>
            </ModalWrapper>
        </>, document.body
    ) : null
}
export default Modal;
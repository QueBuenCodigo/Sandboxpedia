import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import checkIcon from "./assets/check.svg";
import errorIcon from "./assets/error.svg";
import infoIcon from "./assets/info.svg";
import warningIcon from "./assets/warning.svg";

interface Toast {
  id?: string;
  title: string;
  description: string;
  variant: string;
}

interface Props {
  toastList: Toast[];
  autoDelete: boolean;
  dismissTime: number;
}

interface Variant {
  icon: string;
  background: string;
}

const Toast: React.FC<Props> = (props) => {
  const { toastList=[], autoDelete, dismissTime=3000 } = props;
  const [list, setList] = useState<Toast[]>(toastList);

  const toastVariants: { [key: string]: Variant } = {
    success: {
      icon: checkIcon,
      background: "#5cb85c",
    },
    error: {
      icon: errorIcon,
      background: "#d9534f",
    },
    info: {
      icon: infoIcon,
      background: "#5bc0de",
    },
    warning: {
      icon: warningIcon,
      background: "#f0ad4e",
    },
  };

  useEffect(() => {
    const listWithIDs = toastList.map((toast) =>
      toast.id ? toast : { id: Math.floor(Math.random() * 101 + 1), ...toast }
    ) as Toast[];

    setList([...listWithIDs]);
    // eslint-disable-next-line
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, dismissTime);

    return () => {
      clearInterval(interval);
    };

    // eslint-disable-next-line
  }, [toastList, autoDelete, dismissTime, list]);

  const deleteToast = (id?: string): void => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };

  return (
    <ToastContainer>
      {list.map((toast, i) => (
        <ToastWrapper
          background={toastVariants[toast.variant].background}
          key={toast.id}
        >
          <button onClick={() => deleteToast(toast.id)}>X</button>
          <div className="notification-image">
            <img src={toastVariants[toast.variant].icon} alt={toast.title} />
          </div>
          <div>
            <p className="notification-title">{toast.title}</p>
            <p className="notification-message">{toast.description}</p>
          </div>
        </ToastWrapper>
      ))}
    </ToastContainer>
  );
};

const toastInLeft = keyframes`
    from {
		transform: translateX(-100%);
		
	}
	to {
		transform: translateX(0);
	}
`;

const ToastContainer = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  position: fixed;
  z-index: 999999;
  bottom: 12px;
  left: 12px;
  transition: transform 0.6s ease-in;
  animation: ${toastInLeft} 0.7s;
`;

interface ToastWrapperProps {
  background: string;
}

const ToastWrapper = styled.div<ToastWrapperProps>`
  background: ${(props) => props.background || "#fff"};
  transition: 0.3s ease;
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  margin: 0 0 6px;
  margin-bottom: 15px;
  width: 300px;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 0 10px #999;
  color: #fff;
  opacity: 0.9;
  background-position: 15px;
  background-repeat: no-repeat;
  width: 365px;
  color: #fff;
  padding:24px;
  &:hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
    cursor: pointer;
  }

  .notification-title {
    font-weight: 700;
    font-size: 16px;
    text-align: left;
    margin-top: 0;
    margin-bottom: 6px;
    width: 300px;
  }

  .notification-message {
    margin: 0;
    text-align: left;
    margin-left: -1px;
    /* overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; */
  }

  .notification-image {
    float: left;
    margin-right: 15px;
  }

  .notification-image img {
    width: 30px;
    height: 30px;
  }
  button {
    position: relative;
    right: -0.3em;
    top: -0.3em;
    float: right;
    font-weight: 700;
    color: #fff;
    outline: none;
    border: none;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.8;
    line-height: 1;
    font-size: 16px;
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0;
  }
`;

export default Toast;

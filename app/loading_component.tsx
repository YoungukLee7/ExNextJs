// message를 받아서 등록한 컴포넌트를 불러서 fallback에 추가해 준다.
import React from 'react';

interface LoadingComponentProps {
  message: string;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({ message }) => {
    return <h1>{message}</h1>;
}

export default LoadingComponent;
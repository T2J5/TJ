import React from 'react';
 
interface ButtonProps {
    /** the background color of the button */
    color: string;
    /** the text to show inside the button */
    text: string;
}
 
interface ContainerProps extends ButtonProps {
    /** the height of the container (value used with 'px') */
    height: number;
}
 
const Container: React.FC<ContainerProps> = ({ color, height, text }) => {
  return <div style={{ backgroundColor: color, height: `${height}px` }}>{text}</div>
}

export default Container;
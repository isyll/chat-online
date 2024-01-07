import { ButtonHTMLAttributes } from 'react';

function ShadowButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        (className || '') + ' rounded-lg ease-out duration-150 focus:shadow-btn'
      }></button>
  );
}

export default ShadowButton;

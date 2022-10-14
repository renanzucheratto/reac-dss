import { IButtonComponent } from "./interfaces";

const Button = ({ children }: IButtonComponent) => {
  return <button>{children}</button>;
};

export { Button };

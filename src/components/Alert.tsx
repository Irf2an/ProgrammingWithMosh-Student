import { ReactNode } from "react";

// Pass as a child
interface Props {
  children: ReactNode; //to allow html content in children
  onClose: () => void; //a func to pass from the outside so here we dont call the func but just set onClick to onClick
}
//             destructure
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
        {children}
        <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default Alert;

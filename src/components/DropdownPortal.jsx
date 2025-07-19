// src/components/DropdownPortal.jsx
import { createPortal } from "react-dom";

const DropdownPortal = ({ children }) => {
  if (typeof document === "undefined") return null;

  const mount = document.getElementById("dropdown-root");
  return mount ? createPortal(children, mount) : null;
};

export default DropdownPortal;

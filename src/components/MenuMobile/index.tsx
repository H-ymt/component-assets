import {
  autoUpdate,
  useClick,
  useFloating,
  useInteractions,
} from "@floating-ui/react";
import { useState } from "react";
import styles from "./styles.module.css";

export default function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click]);

  return (
    <nav className={styles.nav}>
      <button
        className={styles.button}
        type="button"
        aria-label="menu"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      </button>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          Tooltip
        </div>
      )}
    </nav>
  );
}

import { useRef } from "react";

export function useSetFocus<U extends HTMLElement>() {
  const ref = useRef<U | null>(null);
  const setFocus = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return {
    ref,
    setFocus,
  };
}

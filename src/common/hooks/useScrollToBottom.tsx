import { useRef } from "react";

export function useScrollToBottom<U extends HTMLElement>() {
  const ref = useRef<U | null>(null);
  const scrollToBottom = () => {
    if (ref.current) {
      const { scrollHeight, clientHeight } = ref.current;
      ref.current.scrollTop = scrollHeight - clientHeight;
    }
  };

  return {
    ref,
    scrollToBottom,
  };
}

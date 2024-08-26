import { MutableRefObject, useEffect } from "react";
type useOutsideClicker = {
  actions: () => void;
  ref: MutableRefObject<null>;
};
export const useOutsideClicker = ({ actions, ref }: useOutsideClicker) => {
  const handleClickOutside = function (event: Event) {
    if (
      ref.current &&
      !(ref.current as HTMLElement).contains(event.target as HTMLElement)
    ) {
      return actions();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, actions]);
};

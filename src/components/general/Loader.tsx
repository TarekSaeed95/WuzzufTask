import { memo } from "react";

type LoaderProps = {
  className?: string;
};
export const Loader = memo(({ className }: LoaderProps) => {
  return <span className={`loader ${className}`}></span>;
});

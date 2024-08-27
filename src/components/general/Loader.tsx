type LoaderProps = {
  className?: string;
};
export const Loader = ({ className }: LoaderProps) => {
  return <span className={`loader ${className}`}></span>;
};

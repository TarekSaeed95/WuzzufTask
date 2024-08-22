import React, { ReactNode } from "react";
import { Error } from "../pages/Error";

type ErrorProps = {
  children: ReactNode[] | ReactNode;
};
export class ErrorBoundary extends React.Component<ErrorProps> {
  state = { hasError: false };
  constructor(props: ErrorProps) {
    super(props);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error): void {}
  render(): React.ReactNode {
    if (this.state.hasError) {
      return < ></>;
    }
    return this.props.children;
  }
}

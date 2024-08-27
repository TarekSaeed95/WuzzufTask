import React, { ReactNode } from "react";
import { Error } from "../../pages";

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
  render(): React.ReactNode {
    if (this.state.hasError) {
      return <Error />;
    }
    return this.props.children;
  }
}

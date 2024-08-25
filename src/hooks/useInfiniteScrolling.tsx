import { useCallback, useRef } from "react";
import { ApiJobsGetResponse } from "../types";
import { InfiniteData } from "react-query";
type UseInfiniteScrollingProps = {
  isFetchingNextPage: boolean;
  hasNextPage: boolean | undefined;
  Data: InfiniteData<ApiJobsGetResponse> | undefined;
  fetchNextPage: () => void;
};
export const useInfiniteScrolling: (props: UseInfiniteScrollingProps) => {
  lastItemElementRef: (node: HTMLElement) => void;
} = ({ isFetchingNextPage, hasNextPage, Data, fetchNextPage }) => {
  const observer = useRef<IntersectionObserver>();
  const lastItemElementRef = useCallback(
    (node: HTMLElement) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting && hasNextPage) {
          if (
            Data?.pages[0].data.jobs.length &&
            Data?.pages.length &&
            Data?.pages[0].data.meta.count > Data?.pages.length
          ) {
            fetchNextPage();
          }
        }
      });
      if (node) {
        observer.current?.observe(node);
      }
    },
    [isFetchingNextPage, hasNextPage]
  );
  return { lastItemElementRef };
};

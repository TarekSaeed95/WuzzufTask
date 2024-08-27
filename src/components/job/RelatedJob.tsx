import { Link } from "react-router-dom";
import { useJobById } from "../../api";

type RelatedJobProps = {
  jobId: string;
};
export const RelatedJob = ({ jobId }: RelatedJobProps) => {
  const { data: jobByIdResponse, isLoading: isLoadingJob } = useJobById(jobId);
  const jobData = jobByIdResponse?.data.job;
  if (isLoadingJob) return null;
  return (
    <li>
      <Link to={`/job/${jobId}`}>{jobData?.attributes.title}</Link>
    </li>
  );
};

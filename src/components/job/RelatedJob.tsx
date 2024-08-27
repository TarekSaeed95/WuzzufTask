import { Link } from "react-router-dom";
import { useJobById } from "../../api";

type RelatedJobProps = {
  jobId: string;
};
export const RelatedJob = ({ jobId }: RelatedJobProps) => {
  const { data: jobByIdResponse } = useJobById(jobId);
  const jobData = jobByIdResponse?.data.job;
  return (
    <li>
      <Link to={`/job/${jobId}`}>{jobData?.attributes.title}</Link>
    </li>
  );
};

import { Link } from "react-router-dom";
import { useSkills } from "../api";
import { Loader } from "./Loader";

type JobsCardSkillsProps = {
  skillId: string;
};
export const JobsCardSkills = ({ skillId }: JobsCardSkillsProps) => {
  const { data: skillResponse, isLoading: isLoadingSkills } = useSkills({
    id: skillId,
  });
  const skill = skillResponse?.data.skill.attributes;
  return (
    <p>
      {isLoadingSkills ? (
        <Loader />
      ) : (
        <Link to={"/skill/" + skillId}>{skill?.name}</Link>
      )}
    </p>
  );
};

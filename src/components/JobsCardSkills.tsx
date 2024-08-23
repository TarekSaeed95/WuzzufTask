import { Link } from "react-router-dom";
import { useSkills } from "../api";

type JobsCardSkillsProps = {
  skillId: string;
};
export const JobsCardSkills = ({ skillId }: JobsCardSkillsProps) => {
  const { data: skillResponse } = useSkills({ id: skillId });
  const skill = skillResponse?.data.skill.attributes;
  return (
    <p>
      <Link to={"/skill/" + skillId}>{skill?.name}</Link>
    </p>
  );
};

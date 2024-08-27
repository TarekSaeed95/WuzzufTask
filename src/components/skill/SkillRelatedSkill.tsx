import { Link } from "react-router-dom";
import { useSkillById } from "../../api";

type RelatedSkillProps = {
  skillId: string;
};
export const SkillRelatedSkill = ({ skillId }: RelatedSkillProps) => {
  const { data: skillByIdResponse, isLoading: isLoadingSkill } =
    useSkillById(skillId);
  const skillData = skillByIdResponse?.data.skill;
  if (isLoadingSkill) return null;
  return (
    <li>
      <Link to={`/skill/${skillId}`}>{skillData?.attributes.name}</Link>
    </li>
  );
};

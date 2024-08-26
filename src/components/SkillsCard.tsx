import { Link } from "react-router-dom";
import { useSkillById } from "../api";
import { Loader } from "./Loader";
import { useAppDispatch } from "../hooks";
import { useEffect } from "react";
import { setRelatedJobsIds } from "../redux/features";

type SkillsCardProps = {
  skillId: string;
};
export const SkillsCard = ({ skillId }: SkillsCardProps) => {
  const {
    data: skillResponse,
    isLoading: isLoadingSkill,
    isError,
  } = useSkillById(skillId);
  const skillData = skillResponse?.data?.skill;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (skillData)
      dispatch(
        setRelatedJobsIds({
          skillsIds: skillId,
          jobsIds: skillData.relationships.jobs.map((job) => job.id),
        })
      );
  }, [isLoadingSkill, skillData?.id]);
  if (isError) <h1>Error</h1>;
  return (
    <section className="skill-card">
      {isLoadingSkill ? (
        <Loader />
      ) : (
        <>
          <h2>
            <Link to={"/skill/" + skillId}>{skillData?.attributes.name}</Link>
          </h2>
          <section className="skill-attr">
            <div>
              <p>Type:</p>
              <p>{skillData?.attributes.type}</p>
            </div>
            <div>
              <p>Importance:</p>
              <p>{skillData?.attributes.importance}</p>
            </div>
            <div>
              <p>Level:</p>
              <p>{skillData?.attributes.level}</p>
            </div>
          </section>
        </>
      )}
    </section>
  );
};

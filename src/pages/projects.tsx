import { GetStaticProps } from "next";
import { Layout } from "../components/Layout";
import { Projects } from "../components/Projects";

type DataProps = {
  data: {
    projects: {
      id: number;
      name: string;
      description: string;
      techs: string[];
      githubUrl: string;
      liveUrl: string;
      screenshot: string;
    }[];
  };
};

const ProjectsPage = ({ data }: DataProps) => (
  <Layout title="Yogesh Sherpa - Projects">
    <Projects data={data} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = (await import("../../data.json")).default;

  return {
    props: { data },
  };
};

export default ProjectsPage;

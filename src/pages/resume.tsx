import { GetStaticProps } from "next";
import { Layout } from "../components/Layout";
import { Resume } from "../components/Resume";

type DataProps = {
  data: {
    resume: {
      experience: {
        id: number;
        date: string;
        title: string;
        company: string;
        duties: string[];
      }[];
      education: {
        id: number;
        name: string;
        date: string;
        location: string;
        program: string;
      }[];
      skills: {
        id: number;
        name: string;
        list: string[];
      }[];
    };
  };
};

const ResumePage = ({ data }: DataProps) => {
  return (
    <Layout title="Yogesh Sherpa - Resume">
      <Resume data={data} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = (await import("../../data.json")).default;

  return {
    props: { data },
  };
};

export default ResumePage;

import { HomeLayout } from "@/components/layout/home";
import { Accordion } from "@/components/test";
import type { NextPage } from "next";
import styles from "~/styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <HomeLayout title="グルメリサーチ">
        <section>
          <h2>エリアから探す</h2>
        </section>
      </HomeLayout>
    </div>
  );
};

export default Home;

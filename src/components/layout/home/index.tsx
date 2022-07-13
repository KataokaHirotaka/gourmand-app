import { Props } from "@/components/types/layout";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { NextSeo } from "next-seo";

export const HomeLayout: React.FC<Props> = ({
  children,
  title,
  description,
}): JSX.Element => {
  return (
    <div>
      <NextSeo title={title} description={description} />
      <Header></Header>
      <main className="pt-14 px-4">
        <div className="max-w-5xl w-full mx-auto">{children}</div>
      </main>
      <Footer></Footer>
    </div>
  );
};

"use client";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import buttondata from "./featuresData"
import { Fade } from "react-awesome-reveal";

const Features = () => {
  return (
    <>
      <Fade duration={2000}>
        <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px] items-center text-center justify-center">
          <div className="container">
            <SectionTitle
              subtitle="Egenskaper"
              title="Hovedtrekkene"
              paragraph=""
            />

            <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
              {featuresData.featuresData.map((feature, i) => (
                <SingleFeature key={i} feature={feature} />
              ))}
            </div>

          </div>
          <Link href="#" className="text-xl border-2 py-2 px-3 rounded-lg bg-[#58c0c2] text-white">
            Kom i gang
          </Link>
        </section>
      </Fade>
    </>
  );
};

export default Features;

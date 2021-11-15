import clsx from "clsx";
import React from "react";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "User Freindly",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: <>IGNOUWALA is designed to be user friendly.</>,
  },
  {
    title: "Multiple Languages",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: <>Available in Hindi and English</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import styles from "./Heading.module.scss";

interface headingProps {
  children: React.ReactNode;
}

const Heading = (props: headingProps) => {
  const { children } = props;
  return <div className={styles.root}>
    <div className={styles.rootChild}>{children}</div>
  </div>;
};

export default Heading;

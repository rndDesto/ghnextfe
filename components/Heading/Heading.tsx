import React from "react";
import styles from "./Heading.module.css";

interface headingProps {
  children: React.ReactNode;
}

const Heading = (props: headingProps) => {
  const { children } = props;
  return <div className={styles.root}>{children}</div>;
};

export default Heading;

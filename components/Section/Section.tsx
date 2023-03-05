import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type SectionProps = {
  children: ReactNode;
};

const Section = (props: SectionProps) => {
  const { children } = props;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Section;

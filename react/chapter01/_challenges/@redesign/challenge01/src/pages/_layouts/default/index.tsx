import React from 'react';
import { motion } from 'framer-motion';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <motion.div style={{ width: '100%', height: '100%' }}>
      <h1>Header</h1>
      {children}
      <h1>Footer</h1>
    </motion.div>
  );
};

export default DefaultLayout;

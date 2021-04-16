import { navigate } from 'gatsby-link';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    navigate('/home/');
  }, []);
  return null;
};

export default Index;

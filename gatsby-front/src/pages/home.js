import { useEffect } from 'react';
import { navigate } from 'gatsby-link';

const Home = () => {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
};

export default Home;

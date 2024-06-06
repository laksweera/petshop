import React from 'react';
import Herosection from '../components/Home/Herosection';
import FurryFriends from '../components/Home/furryfriends'; // Corrected component name
import Foods from '../components/Home/foods'; // Corrected component name

const Home = () => {
  return (
    <div>
      <Herosection />
      <FurryFriends /> {/* Corrected component name */}
      <Foods /> {/* Corrected component name */}
    </div>
  );
}

export default Home;



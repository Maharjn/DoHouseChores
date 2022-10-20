import React from 'react';
import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';

const About = () => {
    const { loading, data } = useQuery(QUERY_PROFILES);
    const profiles = data?.profiles || [];
  
    return (
        <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
            <h2>Chores just got a lot more fun!</h2>
            <h4> Create a list of household chores and assign task to family members.</h4>
       </div>

          )}
        </div>
      </div>
    </main>
    );
};

export default About;
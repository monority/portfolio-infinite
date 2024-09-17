import { useState, useEffect } from 'react';

const AgeCount = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const birthDate = new Date('1994-03-28');

    const updateAge = () => {
      const currentDate = new Date();
      const ageInMilliseconds = currentDate - birthDate;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Using 365.25 to account for leap years
      setAge(ageInYears.toFixed(8)); // Limiting decimal places
    };

    const intervalId = setInterval(updateAge, 10); 
    updateAge();

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div id="age-container">
      <p>
        <span id="age">{age}</span> années
      </p>
    </div>
  );
};

export default AgeCount;

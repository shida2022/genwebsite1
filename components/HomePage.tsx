
import React from 'react';

const HomePage = ({ data }: any) => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">NTRU: Next-generation Cryptography</h1>
      <div className="text-center">
        <p className="text-lg">{data.overview.description}</p>
        <p className="text-md mt-2 text-gray-600">NIST Status: {data.overview.nist_status}</p>
      </div>
    </div>
  );
};

export default HomePage;

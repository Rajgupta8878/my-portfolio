import React from 'react';

const Page = () => {
  const resumeFilePath = '/resume.pdf'; // Replace with the actual path to your resume file

  return (
    <div
      style={{ backgroundImage: "url(/planet.png)" }}
      className='w-screen h-screen flex items-center justify-center bg-center bg-cover'
    >
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {/* Other portfolio content here */}

        <div className='mt-3'>
          <h1 className="text-[50px] text-white font-semibold">
            Hi, User!
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}  {" "}  {"   "}
              This is my Resume
            </span>
          </h1>
          <h1 className="text-[25px] text-white font-semibold">
            <a href={resumeFilePath} download="resume.pdf" className="btn btn-primary">
              Download Resume
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page;

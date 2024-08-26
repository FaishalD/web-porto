const Hero = () => {
  return (
    <div className="container mb-10" id="hero">
      <div className="flex flex-wrap">
        <div className="w-full self-center px-4 md:w-1/2">
          <h5 className="text-base font-semibold text-primary md:text-xl">
            Front-End Engineer
          </h5>
          <h1 className="mt-2 font-bold text-3xl lg:text-4xl">
            Hello, my name is Faishal Dzaki
          </h1>
          <p className="font-medium mt-3 mb-10">
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>

          <div className="container mt-5 p-0">
            <a
              href="https://www.linkedin.com/in/faishald/"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-dark shadow-md hover:opacity-80 transition duration-300 ease-in-out"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/FaishalD"
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold leading-6 text-dark hover:opacity-80"
              target="_blank"
            >
              View on Github <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="w-full self-end px-4 md:w-1/2">
          <div className="mt-10"></div>
          <img
            src="\images\profil.png"
            alt="bg-image"
            className="mx-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

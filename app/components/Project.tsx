import React from "react";
import Head from "next/head";

const Project = () => {
  return (
    <>
      <head>
        <link rel="stylesheet" href="\css\project.css"></link>
      </head>
      <div className="mb-10 container" id="project">
        <div className="text-center">
          <h2 className="font-bold text-3xl lg:text-4xl text-dark">Projects</h2>
        </div>
        <div className="container lg:px-48">
          <div className="card w-full self-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm mt-10">
            <img
              src="\images\project1.png"
              className="h-56 w-full object-cover"
              alt="project1"
            />
            <div className="p-4 sm:p-6">
              <a href="#">
                <h3 className="text-lg font-medium text-dark">
                  Sistem Informasi Sumber Daya Terintegrasi (SISTER) Ditjen
                  DIKTI
                </h3>
              </a>
              <p className="text-dark opacity-80">as Technical Writer</p>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-dark opacity-60">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </div>
          <div className="card w-full self-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm mt-10">
            <img
              src="\images\project2.png"
              className="h-56 w-full object-cover"
              alt="project2"
            />
            <div className="p-4 sm:p-6">
              <a href="#">
                <h3 className="text-lg font-medium text-dark">
                  Website Bayu Tirta Cell Malang
                </h3>
              </a>
              <p className="text-dark opacity-80">as Front-End Engineer</p>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-dark opacity-60">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

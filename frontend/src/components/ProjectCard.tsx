import React from "react";

interface Project {
  id: number;
  Title: string;
  Description: { type: string; children: { type: string; text: string }[] }[];
  Subject: string;
  Author: string;
  Created: string;
  projectImage?: {
    alternativeText?: string | null;
    caption?: string | null;
    createdAt: string;
    documentId: string;
    ext: string;
    formats?: {
      thumbnail?: { url: string };
      medium?: { url: string };
      small?: { url: string };
    };
    hash: string;
    height: number;
    id: number;
    mime: string;
    name: string;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: any;
    publishedAt: string;
    size: number;
    updatedAt: string;
    url: string;
    width: number;
  };
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const imageUrl = project.projectImage?.url
    ? `http://localhost:1337${project.projectImage.url}`
    : "https://picsum.photos/150"; // Default placeholder

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex w-full md:max-w-4xl lg:max-w-5xl h-[180px] md:h-36 lg:h-40 my-2 mx-0">
      {/* Image taking full height in all views */}
      <div className="w-1/3 h-full flex-shrink-0">
        <img
          src={imageUrl}
          alt={project.Title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow p-3 md:p-4 h-full">
        {/* Title */}
        <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">{project.Title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3 break-words">
          {project.Description.length > 0
            ? project.Description[0].children.map((child) => child.text).join(" ") || "No description available."
            : "No description available."}
        </p>

        {/* Metadata & Button */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs md:text-sm font-medium text-gray-900">{project.Subject}</p>
            <p className="text-[10px] md:text-xs text-gray-500">By {project.Author}</p>
          </div>

          {/* Add to Cart Button (Desktop) */}
          <button className="bg-[#F4A340] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm hover:bg-[#E59330] transition-colors hidden lg:block">
            Add to Cart
          </button>

          {/* "A" Button for Mobile */}
          <button className="bg-[#F4A340] text-white px-7 py-2.5 rounded-md text-xs md:text-sm hover:bg-[#E59330] transition-colors lg:hidden">
            A
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

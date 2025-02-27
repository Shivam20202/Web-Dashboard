import React, { useState, useEffect, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

// Define Type for Strapi API Response
interface Project {
  id: number;
  Title: string;
  Description: { type: string; children: { type: string; text: string }[] }[];
  Subject: string;
  Author: string;
  Created: string;
}

const tabs = ["Project", "Saved", "Shared", "Achievement"];

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Project");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/projects?populate=*");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        console.log(data)
        if (Array.isArray(data.data)) {
          setProjects(data.data);
        } else {
          throw new Error("Invalid API response format");
        }
      } catch (err) {
        setError("Error fetching projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) =>
        project.Title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery, projects]
  );

  return (
    <div className="pb-20 lg:pb-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Header for All Screens */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-2xl font-bold mb-4 lg:mb-0">Portfolio</h1>

          {/* Filter & Search - Only shown in Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Filter Button (Before Search Bar) */}
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <SlidersHorizontal size={20} className="text-gray-600" />
              <span className="text-gray-600">Filter</span>
            </button>

            {/* Search Bar */}
            <div className="relative w-96 flex items-center border rounded-lg">
              <input
                type="text"
                placeholder="Search a project"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#DD4B25] focus:border-transparent rounded-lg"
              />
              <div className="absolute right-2 bg-[#DD4B25] p-1.5 rounded-md">
                <Search size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 overflow-x-auto pb-2 border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab
                  ? "text-[#DD4B25] border-b-2 border-[#DD4B25]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar for Mobile & Tablet */}
        <div className="block lg:hidden mt-4">
          <div className="relative flex items-center border rounded-lg">
            <input
              type="text"
              placeholder="Search a project"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#DD4B25] focus:border-transparent rounded-lg"
            />
            <div className="absolute right-2 bg-[#DD4B25] p-1.5 rounded-md">
              <Search size={16} className="text-white" />
            </div>
          </div>
        </div>

        {/* Loading & Error Handling */}
        {loading ? (
          <p className="text-center text-gray-500">Loading projects...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="space-y-4">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <p className="text-center text-gray-500">No projects found</p>
            )}
          </div>
        )}

        {/* Mobile Filter Button */}
        <button className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-[#DD4B25] text-white px-8 py-3 rounded-full lg:hidden shadow-lg z-50 flex items-center gap-2">
          <SlidersHorizontal size={20} />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;

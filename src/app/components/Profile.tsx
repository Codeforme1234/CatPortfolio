// Profile.tsx
import React from "react";
import { profileData } from "../data/mockData";
import Link from "next/link";

interface ProfileProps {
  userId: number;
  onCompanyClick: (companyId: string) => void;
  selectedCompanyId?: string | null;
}

const Profile: React.FC<ProfileProps> = ({ onCompanyClick, selectedCompanyId }) => {
  const handleCompanyClick = (companyId: string) => {
    onCompanyClick(companyId);
  };

  return (
    <div className="relative p-6 overflow-y-auto scroll-smooth no-scrollbar focus:scroll-auto overflow-auto max-h-[90vh] border-l border-gray-100 bg-gradient-to-br from-gray-50 to-white">
      
      {/* Profile Header */}
      <div className="text-center mb-8">
        <div className="relative inline-block mb-4">
          <img
            src={typeof profileData.img === 'string' ? profileData.img : profileData.img.src}
            alt="Profile"
            className="w-20 h-20 rounded-full ring-4 ring-white shadow-lg"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-3 border-white shadow-sm"></div>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-1">{profileData.name}</h2>
        <p className="text-sm text-blue-600 font-medium mb-1">{profileData.role}</p>
        <p className="text-sm text-gray-500 flex items-center justify-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {profileData.location}
        </p>
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Experience</h3>
        </div>
        
        <div className="space-y-2">
          {profileData.experience.map((exp, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-2 flex flex-col shadow-sm border transition-all duration-200 ${
                selectedCompanyId === exp.companyId
                  ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-md ring-blue-100"
                  : exp.hidden 
                    ? "bg-gray-50 border-gray-200 opacity-85" // Different styling for hidden companies
                    : "bg-white border-gray-100 hover:shadow-md"
              }`}
            >
              <div 
                className={`flex items-center space-x-3 ${
                  exp.companyId && !exp.hidden ? "cursor-pointer" : "cursor-default"
                }`} 
                onClick={() => exp.companyId && !exp.hidden && handleCompanyClick(exp.companyId)}
              >
                <div 
                  className={`flex-shrink-0 w-12 h-12 items-center justify-center transition-all duration-200 ${
                    selectedCompanyId === exp.companyId
                      ? "scale-110 ring-2 ring-blue-100 rounded-lg"
                      : exp.companyId && !exp.hidden ? "hover:scale-105" : ""
                  }`}
                 
                >
                  <img
                    src={typeof exp.img === 'string' ? exp.img : exp.img.src}
                    alt={exp.alt ? exp.alt : "Company"}
                    className={`w-12 h-12 rounded-lg object-cover ${
                      exp.hidden ? "grayscale" : ""
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`text-sm font-semibold mb-1 ${
                    selectedCompanyId === exp.companyId 
                      ? "text-blue-900" 
                      : exp.hidden 
                        ? "text-gray-500" 
                        : "text-gray-900"
                  }`}>
                    {exp.position}
                  </h4>
                  <p className={`text-sm mb-1 ${
                    selectedCompanyId === exp.companyId 
                      ? "text-blue-700" 
                      : exp.hidden 
                        ? "text-gray-800" 
                        : "text-gray-600"
                  }`}>
                    {exp.company}
                  </p>
                  <p className={`text-xs ${
                    selectedCompanyId === exp.companyId 
                      ? "text-blue-600" 
                      : exp.hidden 
                        ? "text-gray-400" 
                        : "text-gray-500"
                  }`}>
                    {exp.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Education</h3>
        </div>
        
        <div className="space-y-4">
          {profileData.education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <img
                    src={typeof edu.img === 'string' ? edu.img : edu.img.src}
                    alt={edu.alt ? edu.alt : "Institution"}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">{edu.institution}</h4>
                  <p className="text-sm text-gray-600 mb-1">{edu.degree}</p>
                  <p className="text-xs text-gray-500">{edu.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Link 
          href={profileData.profileLink}
          className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-3 px-4 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 hover:scale-105 shadow-sm"
        >
          View Full Profile
        </Link>
        
        <Link 
          href={profileData.profileLink}
          className="flex w-full bg-white border border-gray-200 text-gray-700 text-center py-3 px-4 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 items-center justify-center space-x-2"
        >
          <span>LinkedIn</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      </div>

      {/* Quick Stats */}
      {/* <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Quick Stats</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">{profileData.experience.length}</div>
            <div className="text-xs text-gray-500">Experiences</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-600">{profileData.education.length}</div>
            <div className="text-xs text-gray-500">Education</div>
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default Profile;

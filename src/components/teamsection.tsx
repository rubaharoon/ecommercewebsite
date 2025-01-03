import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      image: "/images/team-member-1.jpg", // Replace with your image path
      description: "John is the driving force behind our company.",
    },
    {
      name: "Jane Smith",
      position: "Marketing Manager",
      image: "/images/team-member-2.jpg", // Replace with your image path
      description: "Jane creates impactful marketing strategies.",
    },
    {
      name: "Emily Johnson",
      position: "Lead Developer",
      image: "/images/team-member-3.jpg", // Replace with your image path
      description: "Emily leads our development team with innovation.",
    },
    {
      name: "Michael Brown",
      position: "UI/UX Designer",
      image: "/images/team-member-4.jpg", // Replace with your image path
      description: "Michael designs seamless user experiences.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-[#1B6392] mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Our dedicated team works hard to deliver the best results.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover"
              />
              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-blue-500 text-sm mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

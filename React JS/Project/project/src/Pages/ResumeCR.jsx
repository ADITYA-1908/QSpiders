import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PIC from "../assets/pic.jpg";
export default function Resume() {
  const [showImage, setShowImage] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showMoreSkills, setShowMoreSkills] = useState(false);

  // Personal info
  const personalInfo = {
    name: "Aditya Basantia",
    title: "Frontend Developer",
    address: "New Khajuria Berhampur",
    email: "adityabasantia729@gmail.com",
    phone: "9078547771",
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "NIST University",
        year: "2021-2025",
      },
      {
        degree: "Intermediate",
        institution: "Kendriya Vidyalaya",
        year: "2019-2021",
      },
    ],
    projects: [
      {
        title: "Website | Personal Portfolio",
        description:
          "Championed the development of a user-friendly portfolio to showcase my experiences, projects and skills. Built with Next.js and Framer Motion, featuring a vibrant color scheme to enhance creativity.",
        technologies: "Next.js, Framer Motion, Tailwind CSS",
        link: "http://aditya--portfolio.vercel.app/",
      },
      {
        title: "Graduate US",
        description:
          "Developed 'Graduate Us', an online web application which helps college students to connect and chat with their Alumnis and get free aceess to apply to all new optimised Jobs and Internships Portal.",
        technologies: "React.js, Material UI, Node.js, MongoDB, AWS",
        link: "GitHub link",
      },
      {
        title: "Medivault",
        description:
          "Developed 'Medivault' Utilizes Hyperledger blockchain and NFTs to ensure tamper-proof ownership and seamless tracking of medical records via DLT. Integrates IPFS and Pinata for fast, secure, and immutable storage, ensuring real-time access and data integrity.",
        technologies: "Hyperledger, NFTs, IPFS, Pinata",
        link: "GitHub link",
      },
    ],
    skills: {
      frontend: [
        "React.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Material UI",
        "JavaScript",
      ],
      backend: ["Node.js", "Express.js", "RESTful APIs"],
      database: ["MongoDB", "SQL"],
      blockchain: ["Hyperledger Fabric", "IPFS", "NFTs"],
      cloud: ["Vercel", "Netlify", "AWS"],
      versionControl: ["Git", "GitHub"],
      languages: ["Java", "Python", "JavaScript"],
      tools: ["Postman", "VS Code", "Figma", "Framer Motion"],
    },
  };

  // Theme colors - vibrant blue theme
  const colors = {
    primary: "#2563eb",
    secondary: "#1e40af",
    accent: "#3b82f6",
    light: "#f0f9ff",
    text: "#1e293b",
    white: "#ffffff",
  };

  return (
    <div
      className="container py-4"
      style={{ backgroundColor: colors.light, color: colors.text }}
    >
      {/* Header Section */}
      <div
        className="row p-4 mb-4 rounded shadow"
        style={{ backgroundColor: colors.primary, color: colors.white }}
      >
        <div className="col-md-8">
          <h1 className="display-4 fw-bold">{personalInfo.name}</h1>
          <h3 className="mb-3">{personalInfo.title}</h3>
          <div className="mt-3">
            <p className="mb-1">
              <i className="bi bi-geo-alt-fill me-2"></i>
              {personalInfo.address}
            </p>
            <p className="mb-1">
              <i className="bi bi-envelope-fill me-2"></i>
              {personalInfo.email}
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2"></i>
              {personalInfo.phone}
            </p>
          </div>
        </div>

        <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
          <button
            className="btn mb-3"
            style={{
              backgroundColor: colors.accent,
              color: colors.white,
              borderColor: colors.accent,
            }}
            onClick={() => setShowImage(!showImage)}
          >
            {showImage ? "Hide Photo" : "Show Photo"}
          </button>

          {showImage && (
            <div
              className="position-relative"
              style={{ width: "150px", height: "150px" }}
            >
              <div
                className="rounded-circle overflow-hidden border border-4"
                style={{
                  width: "150px",
                  height: "150px",
                  borderColor: colors.white,
                }}
              >
                <img
                  src={PIC}
                  alt="Profile"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Education Section */}
      <div
        className="row p-4 mb-4 rounded shadow"
        style={{ backgroundColor: colors.white }}
      >
        <div className="col-12">
          <h2
            className="pb-2 mb-4"
            style={{ borderBottom: `2px solid ${colors.primary}` }}
          >
            Education
          </h2>

          {personalInfo.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <h4 className="fw-bold">{edu.degree}</h4>
              <p style={{ color: colors.secondary }}>
                {edu.institution} | {edu.year}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div
        className="row p-4 mb-4 rounded shadow"
        style={{ backgroundColor: colors.white }}
      >
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2
              className="pb-2 mb-0"
              style={{ borderBottom: `2px solid ${colors.primary}` }}
            >
              Projects
            </h2>
            <button
              className="btn"
              style={{
                backgroundColor: colors.primary,
                color: colors.white,
              }}
              onClick={() => setShowMoreProjects(!showMoreProjects)}
            >
              {showMoreProjects ? "Show Less" : "Show More"}
            </button>
          </div>

          <div className="row">
            {/* Always show first project */}
            <div className="col-md-12 mb-3">
              <div
                className="card h-100"
                style={{ border: `1px solid ${colors.accent}` }}
              >
                <div
                  className="card-header"
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.white,
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title mb-0">
                      {personalInfo.projects[0].title}
                    </h5>
                    <a
                      href={personalInfo.projects[0].link}
                      className="text-white text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    {personalInfo.projects[0].description}
                  </p>
                  <div
                    className="badge p-2"
                    style={{
                      backgroundColor: colors.accent,
                      color: colors.white,
                    }}
                  >
                    {personalInfo.projects[0].technologies}
                  </div>
                </div>
              </div>
            </div>

            {/* Show more projects when button is clicked */}
            {showMoreProjects && (
              <>
                {personalInfo.projects.slice(1).map((project, index) => (
                  <div key={index} className="col-md-6 mb-3">
                    <div
                      className="card h-100"
                      style={{ border: `1px solid ${colors.accent}` }}
                    >
                      <div
                        className="card-header"
                        style={{
                          backgroundColor: colors.primary,
                          color: colors.white,
                        }}
                      >
                        <div className="d-flex justify-content-between">
                          <h5 className="card-title mb-0">{project.title}</h5>
                          <a
                            href="#"
                            className="text-white text-decoration-none"
                          >
                            {project.link}
                          </a>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="card-text">{project.description}</p>
                        <div
                          className="badge p-2"
                          style={{
                            backgroundColor: colors.accent,
                            color: colors.white,
                          }}
                        >
                          {project.technologies}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div
        className="row p-4 rounded shadow"
        style={{ backgroundColor: colors.white }}
      >
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2
              className="pb-2 mb-0"
              style={{ borderBottom: `2px solid ${colors.primary}` }}
            >
              Skills
            </h2>
            <button
              className="btn"
              style={{
                backgroundColor: colors.accent,
                color: colors.white,
              }}
              onClick={() => setShowMoreSkills(!showMoreSkills)}
            >
              {showMoreSkills ? "Show Less" : "Show More"}
            </button>
          </div>

          {/* Always show frontend and backend skills */}
          <div className="mb-4">
            <h5 style={{ color: colors.secondary }}>Frontend</h5>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {personalInfo.skills.frontend.map((skill, index) => (
                <span
                  key={index}
                  className="badge p-2"
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.white,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <h5 style={{ color: colors.secondary }}>Backend</h5>
            <div className="d-flex flex-wrap gap-2">
              {personalInfo.skills.backend.map((skill, index) => (
                <span
                  key={index}
                  className="badge p-2"
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.white,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Show more skills when button is clicked */}
          {showMoreSkills && (
            <>
              <h5 style={{ color: colors.secondary }}>Database</h5>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {personalInfo.skills.database.map((skill, index) => (
                  <span
                    key={index}
                    className="badge p-2"
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.white,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h5 style={{ color: colors.secondary }}>Blockchain</h5>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {personalInfo.skills.blockchain.map((skill, index) => (
                  <span
                    key={index}
                    className="badge p-2"
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.white,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h5 style={{ color: colors.secondary }}>Cloud & Deployment</h5>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {personalInfo.skills.cloud.map((skill, index) => (
                  <span
                    key={index}
                    className="badge p-2"
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.white,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h5 style={{ color: colors.secondary }}>Version Control</h5>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {personalInfo.skills.versionControl.map((skill, index) => (
                  <span
                    key={index}
                    className="badge p-2"sss
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.white,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h5 style={{ color: colors.secondary }}>Programming Languages</h5>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {personalInfo.skills.languages.map((skill, index) => (
                  <span
                    key={index}
                    className="badge p-2"
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.white,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h5 style={{ color: colors.secondary }}>Tools & Others</h5>
              <div className="d-flex flex-wrap gap-2">
                {personalInfo.skills.tools.map((skill, index) => (
                  <span
                    key={index}
                    className="badge p-2"
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.white,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

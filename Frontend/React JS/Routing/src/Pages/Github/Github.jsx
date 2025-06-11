import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="max-w-xl mx-auto my-10 p-6 rounded-lg shadow-lg bg-gray-800 text-white text-center space-y-4">
      <h1 className="text-4xl font-bold">GitHub Profile</h1>
      <img
        src={data.avatar_url}
        alt="GitHub Avatar"
        className="rounded-full mx-auto border-4 border-white"
        width={150}
      />
      <h2 className="text-2xl font-semibold">
        {data.name || "No Name Provided"}
      </h2>
      <p className="text-gray-300 italic">{data.bio || "No Bio Available"}</p>
      <p>
        <span className="font-bold">Followers:</span> {data.followers}
      </p>
      <p>
        <span className="font-bold">Following:</span> {data.following}
      </p>
      <p>
        <span className="font-bold">Public Repos:</span> {data.public_repos}
      </p>
      <p>
        <span className="font-bold">Location:</span>{" "}
        {data.location || "Not Specified"}
      </p>
      <a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
      >
        Visit GitHub Profile
      </a>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/ADITYA-1908");
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub data");
  }
  return response.json();
};

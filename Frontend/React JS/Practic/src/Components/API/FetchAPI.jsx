import axios from "axios";
import { orderBy } from "lodash";
import { useEffect, useState } from "react";
import { FaArrowDownAZ, FaArrowDownZA } from "react-icons/fa6";
const FetchAPI = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetch = await axios.get("https://api.github.com/users");
        const Userdata = fetch.data;
        setUser(Userdata);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const sortData = (order) => {
    const sortedDatas = orderBy(user, ["login"], [order]);
    setUser(sortedDatas);
  };
  return (
    <>
      {user.length === 0 ? (
        <p>Loading....</p>
      ) : (
        <div>
          <div>
            <h1 className="text-center text-3xl">User Data</h1>
          </div>
          <div className="flex justify-center items-center">
            <table className="border text-center mt-10">
              <thead className="border">
                <tr>
                  <th className="border p-2">SL.NO</th>
                  <th className="border p-2 flex items-center justify-center gap-2">
                    Name{" "}
                    <FaArrowDownAZ
                      className="cursor-pointer"
                      onClick={() => sortData("asc")}
                    />
                    <FaArrowDownZA
                      className="cursor-pointer"
                      onClick={() => sortData("desc")}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {user.map((userInfo, index) => (
                  <tr key={index}>
                    <td className="border p-2">{userInfo.id}</td>
                    <td className="border p-2">{userInfo.login}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default FetchAPI;

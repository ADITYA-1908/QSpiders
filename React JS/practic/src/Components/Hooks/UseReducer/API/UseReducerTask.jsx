import axios from "axios";
import { useEffect, useReducer } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Loading/Loading.jsx";
import { initialStateValue, taskReducer } from "./taskReducer";

const UseReducerTask = () => {
  const [state, dispatch] = useReducer(taskReducer, initialStateValue);
  const { loading, error, users, actionLoading } = state;

  // Fetch
  useEffect(() => {
    dispatch({ type: "loading" });
    axios
      .get("https://api.github.com/users")
      .then(({ data }) => {
        dispatch({ type: "fetch_success", payload: data });
      })
      .catch(() => {
        dispatch({ type: "fetch_failed" });
      });
  }, []);

  // Action handler with toast
  const handleAction = (action, toastMessage = "") => {
    dispatch({ type: "temporary_loading" });

    setTimeout(() => {
      dispatch(action);
      dispatch({ type: "stop_loading" });

      if (toastMessage) {
        if (toastMessage.toLowerCase().includes("removed")) {
          toast.error(toastMessage, {
            position: "top-right",
          });
        } else {
          toast.success(toastMessage, {
            position: "top-right",
          });
        }
      }
    }, 1000);
  };

  return (
    <div className="p-6">
      {/* Toast Container */}
      <ToastContainer />

      {/* Main loading*/}
      {(loading || actionLoading) && <Loading />}

      {/* Error Message */}
      {!loading && error && (
        <h1 className="text-center text-red-500">{error}</h1>
      )}

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {!loading &&
          users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center space-y-4 border"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full"
              />
              <h2 className="text-lg font-semibold">{user.login}</h2>

              {user.isFriend ? (
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() =>
                    handleAction(
                      { type: "remove_friend", payload: user.id },
                      "Request removed"
                    )
                  }
                >
                  Un Follow
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={() =>
                      handleAction(
                        { type: "add_friend", payload: user.id },
                        "Friend request sent"
                      )
                    }
                  >
                    Follow
                  </button>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    onClick={() =>
                      handleAction(
                        { type: "delete_user", payload: user.id },
                        "User removed"
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default UseReducerTask;

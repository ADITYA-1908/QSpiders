export const initialStateValue = {
  loading: false,
  error: null,
  users: [],
  actionLoading: false,
};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true, error: null };
    case "fetch_success":
      return { ...state, loading: false, users: action.payload, error: null };
    case "fetch_failed":
      return { ...state, loading: false, error: "Failed to fetch users" };
    case "add_friend":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload ? { ...user, isFriend: true } : user
        ),
      };
    case "remove_friend":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload ? { ...user, isFriend: false } : user
        ),
      };
    case "delete_user":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "temporary_loading":
      return { ...state, actionLoading: true };
    case "stop_loading":
      return { ...state, actionLoading: false };
    default:
      return state;
  }
};

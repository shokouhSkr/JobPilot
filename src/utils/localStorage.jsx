export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;

  return user;
};

export const addLocalStorageTheme = (theme) => {
  localStorage.setItem("isDarkMode", JSON.stringify(theme));
};

export const getLocalStorageTheme = () => {
  const result = localStorage.getItem("isDarkMode");
  const isDark = result ? JSON.parse(result) : false;

  return isDark;
};

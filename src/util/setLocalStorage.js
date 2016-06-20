export const setLocalData = (name, val) => {
  if (!localStorage.getItem(name)) {
    localStorage.setItem(name, val);
  }
};

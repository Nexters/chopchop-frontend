export const setItem = (key, item) => {
  if (typeof item !== "object") {
    localStorage.setItem(key, item);
    return;
  }
  localStorage.setItem(key, JSON.stringify(item));
};

export const getItem = key => {
  const item = localStorage.getItem(key);
  if (typeof item !== "string") {
    return item;
  }
  return JSON.parse(item);
};

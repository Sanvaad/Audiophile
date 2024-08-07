export const fetchFromLocalStorage = (itemName: string) => {
  const data = localStorage.getItem(itemName);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const storeInLocalStorage = (itemName: string, data: any): void => {
  localStorage.setItem(itemName, JSON.stringify(data));
};

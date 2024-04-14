export const getLocalStorageData = (key) => {
   const data = localStorage.getItem(key);
   return data ? JSON.parse(data) : [];
};

export const setLocalStorageData = (key, value) => {
   localStorage.setItem(key, JSON.stringify(value));
};

export const isSavedInLocalStorage = (id) => {
   return getLocalStorageData("saved-properties").includes(id);
};

export const toggleIdInSavedData = (id) => {
   let savedIds = getLocalStorageData("saved-properties");
   let isAdded = false;

   if (savedIds.includes(id)) {
      savedIds = savedIds.filter((currentId) => currentId != id);
      isAdded = true;
   } else {
      savedIds.push(id);
   }

   setLocalStorageData("saved-properties", savedIds);
   return isAdded;
};

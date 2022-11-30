const getNavigationHandler = (navigateTo, currentPath) => {
  const navigationHandler = (path, callback = () => {}) => {
    if (currentPath !== path) {
      navigateTo(path);
    } else navigateTo(0);
    callback();
  };

  return navigationHandler;
};

export { getNavigationHandler };

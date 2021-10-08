export const getContributers = async () => {
  const data = await fetch(
    `  https://api.github.com/repos/AnandDhakane01/arc-front-end/contributors`
  );
  const response = await data.json();
  return response;
};

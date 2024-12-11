export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) reject('Geolocation not supported');
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
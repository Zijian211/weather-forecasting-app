function importAll(r) {
  const images = {};
  r.keys().forEach((item) => {
    const cleaned = item.replace('./', '');
    images[cleaned] = r(item);
  });
  return images;
}


const allWeatherIcons = importAll(
  require.context('../assets/icons', false, /\.(png)$/)
);

export function weatherIcon(imageName) {

  if (allWeatherIcons[imageName]) {
    return allWeatherIcons[imageName];
  }

  return allWeatherIcons['unknown.png'];
}

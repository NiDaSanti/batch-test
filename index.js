batch = (callback, time) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(callback);
    }, time);
  });
};

addToTheBatch = (color) => {
  const items = [];
  items.push(color); 
  console.log(items);
};

addColorPerSecond = async () => {
  const red = await batch(addToTheBatch("red"), 1000);
  const blue = await batch(addToTheBatch("blue"), 2000);
  const yellow = await batch(addToTheBatch("yellow"), 3000);
  return Promise.all([red, blue, yellow])
    .then((results) => {
      batch(console.log((results)));
    })
    .catch((err) => console.log(err));
};
addColorPerSecond();


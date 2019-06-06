const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getStorage = async (name: string) => {
  let value: any = localStorage.getItem(name);

  const parsedValue = JSON.parse(value);
  if (typeof parsedValue === "object") {
    value = parsedValue;
  }

  await sleep(1000);

  return { response: value };
};

export const setStorage = async (name: string, value: any) => {
  if (typeof value === "object") {
    localStorage.setItem(name, JSON.stringify(value));
  } else {
    localStorage.setItem(name, value);
  }

  await sleep(1000);

  return { response: value };
};

const mockApi = () => ({
  get: getStorage,
  set: setStorage
});

export default mockApi;

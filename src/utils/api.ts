import partialRight from "ramda/es/partialRight";

const sleep = (ms: number) => {
  return () => new Promise(resolve => setTimeout(resolve, ms));
};

export const getStorage = async (name: string, parse?: boolean) => {
  let value: any = localStorage.getItem(name);

  if (parse) value = value ? JSON.parse(value) : null;

  await sleep(1000);

  return value;
};

export const getStorageObj = partialRight(getStorage, [true]);

export const setStorage = async (name: string, value: any) => {
  if (typeof value === "object") value = JSON.stringify(value);

  localStorage.setItem(name, value);

  await sleep(1000);

  return value;
};

export const decodeGetParams = str =>
  decodeURIComponent(str)
    .slice(1)
    .split("&")
    .reduce((acc, item) => {
      const [key, value] = item.split("=");
      return key ? { ...acc, [key]: value } : acc;
    }, {});

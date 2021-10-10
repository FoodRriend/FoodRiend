export const shortLoction = (item: string | undefined) => {
  if (item) {
    return item.substring(item.indexOf(' '), item.length).trim();
  }
};

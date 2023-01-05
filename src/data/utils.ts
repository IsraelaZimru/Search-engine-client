export const capitalize = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

export const numberFormatter = (n: number | undefined) => {
  if (typeof n === "number") return (n * 100).toFixed(2);
};

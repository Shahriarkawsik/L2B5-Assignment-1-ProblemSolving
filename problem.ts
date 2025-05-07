type FormatString = (input: string, toUpper?: boolean) => string;

const formatString: FormatString = (input: string, toUpper?: boolean) => {
  if (toUpper === false) {
    return input.toLowerCase();
  }
  return input.toUpperCase();
};

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  let filtered = items.filter((items) => items.rating >= 4);
  return filtered;
}
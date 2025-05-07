type FormatString = (input: string, toUpper?: boolean) => string;

const formatString: FormatString = (input: string, toUpper?: boolean) => {
  if (toUpper === false) {
    return input.toLowerCase();
  }
  return input.toUpperCase();
};

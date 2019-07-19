export const capitalise = string => {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
};

export const capitaliseMultiple = string => {
  let words = string.toLowerCase().split(" ");

  const newWord = words.map(word => capitalise(word));
  return newWord.join(" ");
};

export default { capitalise, capitaliseMultiple };

const html = (strings: [string], ...values:[string | (() => string)]): string => {
  let result = '';
  console.log(strings);
  console.log(values);
  strings.forEach((string, i) => {
    const value = values[i];
    if (typeof value === 'function') {
      result += string + value();
    } else {
      result += string + (value || '');
    }
  });
  return result;
};

export {
  html
}
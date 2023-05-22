const prod = {
 url: {
  API_URL: 'https://giper45.github.io/marcellaquestions/'
 }
};
const dev = {
 url: {
  API_URL: "/"
 }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;


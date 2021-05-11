// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 425px
// Tablet - 768px
// Laptop - 1024px
// Laptop L - 1440px
// 4K - 2560px

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileC: '576px',
  tablet: '768px',
  laptopMd: '992px',
  laptop: '1200px',
  laptopL: '1440px',
  desktop: '2560px',
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileC: `(min-width: ${size.mobileC})`,
  tablet: `(min-width: ${size.tablet})`,
  laptopMd: `(min-width: ${size.laptopMd})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export default device;

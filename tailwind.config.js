module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(218, 28%, 13%)",
        primaryFooter: "hsl(216, 53%, 9%)",
        primaryIntro: "hsl(217, 28%, 15%)",
        primaryTestimonials: "hsl(219, 30%, 18%)",
        blue: "hsl(198, 60%, 50%)",
        cyan: "hsl(176, 68%, 64%)",
        error: "hsl(0, 100%, 63%)",
        attribution: 'hsl(228, 45%, 44%)'
      },
      fontFamily: {
        openSans: ["open sans, sans serif"],
        raleway: ["raleway, sans serif"]
      },
      screens: {
        xs: '375px',
        sm: '480px',
        md: '768px',
        lg: '1024px' ,
        xl: '1440px'
      }
    }
  }
}

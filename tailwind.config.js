export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'mainDark':'#0B0D17',
        'mainColor':'#D0D6F9',
        'mainLight':'#FFFFFF'
      },
      fontFamily:{
        "bellefair":['Bellefair', 'serif'],
        "barlow":['Barlow Condensed', 'sans-serif']
      },
      backgroundImage:{
        'home-mobile':"url(./static/assets/home/background-home-mobile.jpg)",
        'home-tablet':"url(./static/assets/home/background-home-tablet.jpg)",
        'home-desktop':"url(./static/assets/home/background-home-desktop.jpg)",
        'destination-mobile':"url(./static/assets/destination/background-destination-mobile.jpg)",
        'destination-tablet':"url(./static/assets/destination/background-destination-tablet.jpg)",
        'destination-desktop':"url(./static/assets/destination/background-destination-desktop.jpg)",
        'crew-mobile':"url(./static/assets/crew/background-crew-mobile.jpg)",
        'crew-tablet':"url(./static/assets/crew/background-crew-tablet.jpg)",
        'crew-desktop':"url(./static/assets/crew/background-crew-desktop.jpg)",
        'technology-mobile':"url(./static/assets/technology/background-technology-mobile.jpg)",
        'technology-tablet':"url(./static/assets/technology/background-technology-tablet.jpg)",
        'technology-desktop':"url(./static/assets/technology/background-technology-desktop.jpg)"
      }
    },
  },
  plugins: [],
}


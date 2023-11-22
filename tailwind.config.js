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
        'home-mobile':"url(/home/background-home-mobile.jpg)",
        'home-tablet':"url(/home/background-home-tablet.jpg)",
        'home-desktop':"url(/home/background-home-desktop.jpg)",
        'destination-mobile':"url(/destination/background-destination-mobile.jpg)",
        'destination-tablet':"url(/destination/background-destination-tablet.jpg)",
        'destination-desktop':"url(/destination/background-destination-desktop.jpg)",
        'crew-mobile':"url(/crew/background-crew-mobile.jpg)",
        'crew-tablet':"url(/crew/background-crew-tablet.jpg)",
        'crew-desktop':"url(/crew/background-crew-desktop.jpg)",
        'technology-mobile':"url(/technology/background-technology-mobile.jpg)",
        'technology-tablet':"url(/technology/background-technology-tablet.jpg)",
        'technology-desktop':"url(/technology/background-technology-desktop.jpg)"
      }
    },
  },
  plugins: [],
}


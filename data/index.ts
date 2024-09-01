export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "A passionate front-end software engineer. I strive to deliver seamless and accessible digital products.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Toronto",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Always adding to",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "A Browswer based real time competitive typing game",
    description: "Currently developing",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    descriptionClassName: "md:max-w-52",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to get in touch?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Sortscape",
    des: "Experience the magic of sorting algorithms with user-friendly visualization tool! Watch as algorithms come to life with interactive animations and real-time performance metrics.",
    img: "/sortscape.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg"],
    link:"https://github.com/DavidLeeMinjae/sortscape",
  },
  {
    id: 2,
    title: "UberLy ",
    des: "Request a ride with a tap, see available options come to life, and embark on your journey with real-time tracking and interactive maps. Experience the magic of transportation simplified.",
    img: "/uberly.svg",
    iconLists: [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAWlBMVEUAABMAABQAAAoAAABGRkvT09To6OhxcXTi4uP8/P02NjwAAAePj5LFxcb///8NDRr29vampqiwsLK4uLoAABBBQUeenqBYWFwAAA4XFyHNzc7AwMKVlZeCgoUNhqjnAAAAnUlEQVR4Ac3SRQKEMAAEwWwad3f+/8x1I3ZmjlMQF+5crDkBSmlHPA8b4geBjxkJI4hCTCiIkzRNYoQByXLuyTN0FBQlVUVZIDSkbmjruqWpUbGTBV4McU+RdgrSDlQjjBVDyxGnuSBb7iVLRjFPB2S9d929m0RBtnLEimV7Vmw5lYJ7HLwbgnhHWVD/WWMne9R9yt+pyfO8IRVduQHSkAgQ6p7d2QAAAABJRU5ErkJggg==",
      "/tail.svg",
      "/three.svg",
      "/c.svg",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEVHcEwL4NIP484I4tIX5Mgi574s57Ms2qdi9lNi9VQL4dFi9lRi9lQL4tAh5r4x6a4s2qZC6pBj9lVi9VRi9VRi9lRi9lRi9lRi9lRi9lRi9lQ366Y77KFD7JVQ6HM36qdE7pZI54ZR53E97J8gbn7DAAAAJHRSTlMAX9b//////8xSof+d7NnZ2AfaF0cscIbwvX38ytjrXv///aErfwEpAAAAz0lEQVR4AZ3PBZLDMAxAUYXtMDPn/ndcKczb9g/7jW0JAARRGpMphVJVTWMcMH2S2UZF0wzDxHvbtfXehAYHEcUSKXvJcTFEBmQeXPNRCUV4RvlXlF8QF7BhKwijR4zxKHnAwKDiDRVlQz5iGj0j6oLKDRrZiuoRfdL84WZskoZsRPV0MwE6T8ebqqo6JwxSA3tACN8QkhWLK0I2LaQW6g0GqH6EWBTeBcELwwCgLLBqrkaMYatBa4sW67quRwxg10AyGWEOh5qSaLrJwr38AeQ6FpLPC98nAAAAAElFTkSuQmCC",
    ],
    link:"https://github.com/DavidLeeMinjae/Uberly",
  },
];

export const testimonials = [
  {
    quote:
      "David is a dedicated and passionate front-end software engineer who truly loves what he does. His enthusiasm for coding is infectious, and he's always eager to learn and grow. David is a joy to work with, bringing a positive attitude and a collaborative spirit to every project. He's not only a talented developer but also a valuable team player who makes working on projects fun.",
    name: "Jeet Trivedi",
    title: "Senior Software Engineer",
    img: "/jeet.png",
  },
  {
    quote:
      "David is an exceptionally driven front-end software engineer whose zeal for coding is truly inspiring. He consistently goes above and beyond, demonstrating a genuine commitment to his craft. His ability to balance technical proficiency with a cheerful personality makes him a valuable asset to any project.",
    name: "Kyle Vannarath",
    title: "Aspiring software developer",
    img: "/kyle.png",
  },
  {
    quote:
      "David is a dedicated and passionate front-end software engineer who truly loves what he does. His enthusiasm for coding is infectious, and he's always eager to learn and grow. David is a joy to work with, bringing a positive attitude and a collaborative spirit to every project. He's not only a talented developer but also a valuable team player who makes working on projects fun.",
    name: "Jeet Trivedi",
    title: "Senior Software Engineer",
    img: "/jeet.png",
  },
  {
    quote:
      "David is an exceptionally driven front-end software engineer whose zeal for coding is truly inspiring. He consistently goes above and beyond, demonstrating a genuine commitment to his craft. His ability to balance technical proficiency with a cheerful personality makes him a valuable asset to any project.",
    name: "Kyle Vannarath",
    title: "Aspiring software developer",
    img: "/kyle.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/DavidLeeMinjae",
  },
];

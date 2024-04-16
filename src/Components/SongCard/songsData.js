import image1 from "./Song/Pictures/ys.jpg";
import image2 from "./Song/Pictures/red.jpg";
import image3 from "./Song/Pictures/marsh.jpg";

var ys = new Audio("./Song/Songs/ys.mp3");
var red = new Audio("./Song/Songs/Babbu.mp3");
var friends = new Audio("./Song/Songs/FRIENDS.mp3");

const songs = [
  { song: ys, name: "Therapy time", img: image1 },
  { song: red, name: "Red Challenger", img: image2 },
  { song: friends, name: "FRIENDS", img: image3 },
];

export default songs;

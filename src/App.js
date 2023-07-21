import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😃": "Smiling Face with Open Mouth",
  "😍": "Smiling Face with Heart-Eyes",
  "😂": "Face with Tears of Joy",
  "😊": "Smiling Face with Smiling Eyes",
  "😎": "Smiling Face with Sunglasses",
  "🥰": "Smiling Face with Hearts",
  "😢": "Crying Face",
  "😠": "Angry Face",
  "😴": "Sleeping Face",
  "🤔": "Thinking Face",
  "🥳": "Party Popper",
  "🎉": "Party Popper",
  "🎈": "Balloon",
  "🎂": "Birthday Cake",
  "🍕": "Pizza",
  "🍦": "Ice Cream",
  "🌻": "Sunflower",
  "🐶": "Dog Face",
  "🐱": "Cat Face",
  "🐢": "Turtle",
  "🔥": "Fire",
  "❤️": "Red Heart",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "👀": "Eyes",
  "🙌": "Raising Hands",
  "🙏": "Folded Hands",
  "🤗": "Hugging Face",
  "🤩": "Star-Struck",
  "🥺": "Pleading Face",
  "💩": "Poo",
  "🤣": "Rolling on the Floor Laughing",
  "😋": "Face Savoring Food",
  "😇": "Smiling Face with Halo",
  "😈": "Smiling Face with Horns",
  "🤠": "Cowboy Hat Face",
  "👻": "Ghost",
  "👽": "Alien",
  "🤖": "Robot Face",
  "👑": "Crown",
  "💍": "Ring",
  "🎸": "Guitar",
  "🎮": "Video Game",
  "🍔": "Hamburger",
  "🍿": "Popcorn",
  "🍩": "Doughnut",
  "🍺": "Beer Mug",
  "🍷": "Wine Glass",
  "🍹": "Tropical Drink",
  "🏀": "Basketball",
  "⚽": "Soccer Ball",
  "🎲": "Game Die",
  "📱": "Mobile Phone",
  "💻": "Laptop",
  "📷": "Camera",
  "📚": "Books",
  "🎵": "Musical Note",
  "🎬": "Clapper Board",
  "🚗": "Car",
  "✈️": "Airplane",
  "🚀": "Rocket",
  "🛳️": "Cruise Ship",
  "🏠": "House",
  "🌲": "Evergreen Tree",
  "🌊": "Water Wave",
  "🌈": "Rainbow",
  "⏰": "Alarm Clock",
  "💡": "Light Bulb",
  "💰": "Money Bag",
  "💯": "Hundred Points",
  "🆒": "Cool",
  "🆘": "SOS",
  "🎁": "Wrapped Gift",
  "🎤": "Microphone",
  "🎧": "Headphone",
  "🎶": "Musical Notes",
  "📺": "Television",
  "🎭": "Performing Arts",
  "🎨": "Artist Palette",
  "🎯": "Direct Hit",
  "🎳": "Bowling",
  "🎰": "Slot Machine",
  "🎱": "Billiards",
  "🏓": "Ping Pong",
  "🏸": "Badminton",
  "🥊": "Boxing Glove",
  "🛹": "Skateboard",
  "🛶": "Canoe",
  "🎢": "Roller Coaster",
  "🎡": "Ferris Wheel",
  "🎠": "Carousel Horse",
  "🎪": "Circus Tent",
  "🎫": "Ticket",
  "🎹": "Musical Keyboard",
  "🎺": "Trumpet",
  "🎻": "Violin",
  "🥁": "Drum",
  "🏈": "American Football",
  "🎾": "Tennis",
  "🏐": "Volleyball",
  "🎲": "Game Die",
  "🃏": "Playing Card Black Joker",
  "🀄": "Mahjong Red Dragon",
  "🎴": "Flower Playing Cards",
  "🎟️": "Admission Tickets",
  "🎗️": "Reminder Ribbon",
  "🏵️": "Rosette",
  "🎖️": "Military Medal",
  "🏅": "Sports Medal",
  "🥇": "1st Place Medal",
  "🥈": "2nd Place Medal",
  "🥉": "3rd Place Medal",
  "🏆": "Trophy",
  "🎥": "Movie Camera",
  "🎞️": "Film Frames",
  "📽️": "Film Projector",
  "🎬": "Clapper Board",
  "🎙️": "Studio Microphone",
  "🎚️": "Level Slider",
  "🎛️": "Control Knobs",
  "🎤": "Microphone",
  "🎧": "Headphone",
  "🎷": "Saxophone"
};

// Feel free to add more emojis if you like!

let emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we Don't have this in our database, Try something else";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        placeholder="put an emoji here to know the meaning🤔"
        onChange={emojiInputHandler}
      ></input>
      <div className="outputDiv">{meaning}</div>
      <div>Emoji's We Know</div>
      {emojiWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem 0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

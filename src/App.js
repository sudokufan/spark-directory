import "./App.css";
import Walker from "./walker";

const App = () => {
  const walkers = [
    {
      name: "Kiora",
      status: "desparked",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2014/11/Kiora-the-Crashing-Wave-MtG-Art.jpg",
      source: "https://scryfall.com/card/mat/35/kiora-sovereign-of-the-deep",
      description: "Confirmed in March of the Machine: Aftermath",
    },
    {
      name: "Nissa",
      status: "desparked",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2019/04/Nissa-Who-Shakes-the-World-War-of-the-Spark-Arts.jpg",
      source:
        "https://magic.wizards.com/en/news/magic-story/she-who-breaks-the-world",
      description: "Confirmed on DailyMTG",
    },
    {
      name: "Ajani",
      status: "planeswalker",
      image: "",
      source:
        "https://magic.wizards.com/en/news/magic-story/she-who-breaks-the-world",
      description: "Confirmed on DailyMTG",
    },
    {
      name: "Jace",
      status: "unknown",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2019/04/Jace-Wielder-of-Mysteries-War-of-the-Spark-Art.jpg",
      source: "",
      description: "",
    },
    {
      name: "Teferi",
      status: "desparked",
      image: "",
      source:
        "https://magic.wizards.com/en/news/magic-story/she-who-breaks-the-world",
      description: "Confirmed on DailyMTG",
    },
    {
      name: "Rowan",
      status: "desparked",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2018/05/Rowan-Kenrith-Battlebond-Art.jpg",
      source: "https://youtu.be/odzYBR-X_vw?t=1153",
      description: "Confirmed at MagicCon Minneapolis",
    },
    {
      name: "Will",
      status: "desparked",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2018/05/Will-Kenrith-Battlebond-Art.jpg",
      source: "https://youtu.be/odzYBR-X_vw?t=1153",
      description: "Confirmed at MagicCon Minneapolis",
    },
    {
      name: "Chandra",
      status: "planeswalker",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2016/09/Chandra-Torch-of-Defiance-Kaladesh-MtG-Art.jpg",
      source:
        "https://magic.wizards.com/en/news/magic-story/she-who-breaks-the-world",
      description: "Confirmed on DailyMTG",
    },
    {
      name: "The Wanderer",
      status: "desparked",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2019/04/The-Wanderer-War-of-the-Spark-Art.jpg",
      source: "https://youtu.be/sImiwohnUYg?t=739",
      description: "Confirmed on Loading Ready Run",
    },
    {
      name: "Nahiri",
      status: "desparked",
      image: "",
      source: "https://magic.wizards.com/en/news/magic-story/beyond-repair",
      description: "Confirmed on DailyMTG",
    },
    {
      name: "Karn",
      status: "desparked",
      image: "",
      source:
        "https://magic.wizards.com/en/news/magic-story/she-who-breaks-the-world",
      description: "Confirmed on DailyMTG",
    },
    {
      name: "Ashiok",
      status: "planeswalker",
      image: "",
      source: "https://youtu.be/odzYBR-X_vw?t=1177",
      description: "Confirmed at Magiccon Minneapolis",
    },
  ];

  return (
    <div className="container">
      {walkers.map((walker) => (
        <Walker data={walker} />
      ))}
    </div>
  );
};

export default App;

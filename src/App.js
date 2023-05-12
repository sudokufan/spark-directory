import "./App.css";
import Walker from "./walker";

const App = () => {
  // put the array in a different file
  // add a key to show what is
  const walkers = [
    {
      name: "Kiora",
      status: "Desparked",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2014/11/Kiora-the-Crashing-Wave-MtG-Art.jpg",
      source: "https://scryfall.com/card/mat/35/kiora-sovereign-of-the-deep",
      description: "Confirmed in March of the Machine: Aftermath",
      date: "2023-04-19",
    },
    {
      name: "Nissa",
      status: "Desparked",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2019/04/Nissa-Who-Shakes-the-World-War-of-the-Spark-Arts.jpg",
      source:
        "https://magic.wizards.com/en/news/magic-story/she-who-breaks-the-world",
      description: "Confirmed on DailyMTG",
      date: "2023-05-01",
    },
    {
      name: "Ajani",
      status: "Planeswalker",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2018/07/Ajani-Wise-Counselor-Core-2019-Art.jpg",
      source:
        "https://magic.wizards.com/en/news/magic-story/she-who-breaks-the-world",
      description: "Confirmed on DailyMTG",
      date: "2023-05-01",
    },
    {
      name: "Jace",
      status: "Unknown",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2019/04/Jace-Wielder-of-Mysteries-War-of-the-Spark-Art.jpg",
      source: "",
      description: "",
      date: "",
    },
    {
      name: "Teferi",
      status: "Desparked",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2018/03/Teferi-Dominaria.png",
      source:
        "https://magic.wizards.com/en/news/magic-story/she-who-breaks-the-world",
      description: "Confirmed on DailyMTG",
      date: "2023-05-01",
    },
    {
      name: "Rowan",
      status: "Desparked",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2018/05/Rowan-Kenrith-Battlebond-Art.jpg",
      source: "https://youtu.be/odzYBR-X_vw?t=1153",
      description: "Confirmed at MagicCon Minneapolis",
      date: "2023-05-05",
    },
    {
      name: "Will",
      status: "Desparked",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2018/05/Will-Kenrith-Battlebond-Art.jpg",
      source: "https://youtu.be/odzYBR-X_vw?t=1153",
      description: "Confirmed at MagicCon Minneapolis",
      date: "2023-05-05",
    },
    {
      name: "Chandra",
      status: "Planeswalker",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2016/09/Chandra-Torch-of-Defiance-Kaladesh-MtG-Art.jpg",
      source:
        "https://magic.wizards.com/en/news/magic-story/she-who-breaks-the-world",
      description: "Confirmed on DailyMTG",
      date: "2023-05-01",
    },
    {
      name: "The Wanderer",
      status: "Desparked",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2019/04/The-Wanderer-War-of-the-Spark-Art.jpg",
      source: "https://youtu.be/sImiwohnUYg?t=739",
      description: "Confirmed on Loading Ready Run",
      date: "2023-05-10",
    },
    {
      name: "Nahiri",
      status: "Desparked",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2019/04/Nahiri-Storm-of-Stone-War-of-the-Spark-Arts.jpg",
      source: "https://magic.wizards.com/en/news/magic-story/beyond-repair",
      description: "Confirmed on DailyMTG",
      date: "2023-05-02",
    },
    {
      name: "Karn",
      status: "Desparked",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2014/06/Karn-Liberated-MtG-Planeswalker-Art.jpg",
      source:
        "https://magic.wizards.com/en/news/magic-story/she-who-breaks-the-world",
      description: "Confirmed on DailyMTG",
      date: "2023-05-01",
    },
    {
      name: "Ashiok",
      status: "Planeswalker",
      image:
        "https://www.artofmtg.com/wp-content/uploads/2019/04/Ashiok-Dream-Render-War-of-the-Spark-Art.jpg",
      source: "https://youtu.be/odzYBR-X_vw?t=1177",
      description: "Confirmed at Magiccon Minneapolis",
      date: "2023-05-05",
    },
    {
      name: "Quintorious",
      status: "Unknown",
      image: "",
      source: "",
      description: "",
      date: "",
    },
  ];

  // walkers.sort
  // default to sorting by date
  // add options to sort by status or alphabetically

  return (
    <div className="container">
      {walkers.map((walker) => (
        <Walker data={walker} key={walker.name} />
      ))}
    </div>
  );
};

export default App;

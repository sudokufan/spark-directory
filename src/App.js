import './App.css';
import Walker from './walker';

const App = () => {
  return (
    <div className="container">
      <Walker
        name='Kiora'
        status='desparked'
        image='https://www.artofmtg.com/wp-content/uploads/2014/11/Kiora-the-Crashing-Wave-MtG-Art.jpg'
        source='https://scryfall.com/card/mat/35/kiora-sovereign-of-the-deep'
        description='Confirmed in March of the Machine: Aftermath'
      />
      <Walker
        name='Nissa'
        status='desparked'
        image=''
        source='https://magic.wizards.com/en/news/magic-story/she-who-breaks-the-world'
        description='Confirmed on DailyMTG'
      />
      <Walker
        name='Teferi'
        status='desparked'
        image=''
        source='https://magic.wizards.com/en/news/magic-story/she-who-breaks-the-world'
        description='Confirmed on DailyMTG'
      />
      <Walker
        name='Karn'
        status='desparked'
        image=''
        source='https://magic.wizards.com/en/news/magic-story/she-who-breaks-the-world'
        description='Confirmed on DailyMTG'
      />
      <Walker
        name='Nahiri'
        status='desparked'
        image=''
        source='https://magic.wizards.com/en/news/magic-story/beyond-repair'
        description='Confirmed on DailyMTG'
      />
      <Walker
        name='Jace'
        status='unknown'
        image=''
        source=''
        description=''
      />
      <Walker
        name='Ajani'
        status='planeswalker'
        image=''
        source=''
        description=''
      />
      <Walker
        name='The Wanderer'
        status='desparked'
        image='https://www.artofmtg.com/wp-content/uploads/2019/04/The-Wanderer-War-of-the-Spark-Art.jpg'
        source='https://youtu.be/sImiwohnUYg?t=739'
        description='Confirmed on Loading Ready Run'
      />
      <Walker
        name='Chandra'
        status='planeswalker'
        image=''
        source='https://magic.wizards.com/en/news/magic-story/she-who-breaks-the-world'
        description='Confirmed on DailyMTG'
      />
      <Walker
        name='Will'
        status='desparked'
        image='https://www.artofmtg.com/wp-content/uploads/2018/05/Will-Kenrith-Battlebond-Art.jpg'
        source='https://youtu.be/odzYBR-X_vw?t=1153'
        description='Confirmed at Magiccon Minneapolis'
      />
      <Walker
        name='Rowan'
        status='desparked'
        image='https://www.artofmtg.com/wp-content/uploads/2018/05/Rowan-Kenrith-Battlebond-Art.jpg'
        source='https://youtu.be/odzYBR-X_vw?t=1153'
        description='Confirmed at Magiccon Minneapolis'
      />
      <Walker
        name='Ashiok'
        status='planeswalker'
        image='https://www.artofmtg.com/wp-content/uploads/2014/11/Kiora-the-Crashing-Wave-MtG-Art.jpg'
        source='https://youtu.be/odzYBR-X_vw?t=1177'
        description='Confirmed at Magiccon Minneapolis'
      />
    </div>
  );
}

export default App;

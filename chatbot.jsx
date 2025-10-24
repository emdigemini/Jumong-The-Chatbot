// Chatbot library
// This is a simple chatbot used for SuperSimpleDev
// coding tutorials: https://youtube.com/@SuperSimpleDev

const Chatbot = {
  defaultResponses: {
    'yo oy': `Oy oy! kamusta ang buhay buhay?`,
    'yoooooooooo': `Wag ka nasigaw potanginamo!`,
    'hi': `Oy oy! humihinga kapa ba?`,
    'HELLO HI': `Naka capslock ang potangina. wag ka mag capslock.`,
    'HI': `Wag ka mag capslock men.`,
    'nagtatagalog': `Oo, potanginamo`,
    'oo': `Tama yan.`,
    'hala': `Bakit?`,
    'ha': `Hatdog.`,
    'haa': `Hagdan.`,
    'sorry': `Wag ka mag sorry, bawal dito ang mahihina.`,
    'pasensya': `Wag ka humingi ng tawad bawal dito mahinang nilalang.`,
    'wala': `Raulo ka talaga.`,
    'hello hi': `Oy oy! Kamusta ang buhay-buhay? Wag mo sabihing puro tulog pa rin.`,
    'di ah hindi ah': `Tama yan.`,
    'ulol': `Ulol ka rin pakyu!`, 
    'nagtatagalog': `Oo, potanginamoka.`,
    'tagalog': `Sige.`,
    'kamusta': `Eto ako ngayon nagsisipag, di maging tamad gaya mo.`,
    'wala Wala': `Raulo ka talaga — pero okay lang, trip kita eh.`,
    'wala lang': `Sigi, trip mo yan eh.`,
    'anong ginagawa': `Nagsisipag di maging tamad, gaya mo.`,
    'gutom ako': `Kain ka muna, oh eto kamao ko lamunin mo.`,
    'masipag ako': `Tama yan di lang dapat sa katangahan ikaw mag sipag.`,
    'ayos lang': `Sigurado ka? E bat ampangit mo.`,
    'pagod ako': `Same, pagod na rin akong umasa.`,
    'bobo': `Mas bobo ka potanginamo.`,
    'anong pangalan' : `Ang pangalan ko ay Jumong.`,
    'hindi' : `Gege.`,
    'aba' : `Ano?`,
    'aba aba' : `Abaka bigla kitang masuntok jan.`,
    'wala ka ba tanong' : `Wala potanginamo ayaw kita kausap.`,
    'may tanong ka ba' : `Oo, pwede mo ba i-close na lang tong app? ayaw kita kausap eh.`,
    'sino ka': `Ako si Jumong, hindi ex mo — wag kang clingy.`,
    'hoy': `Ano?! Wag kang sumigaw potanginamo.`,
    'haha': `Baliw ampota anong nakakatawa?`,
    'matapang ka': `Oo, sapakin ko ulo mo gusto mo?`,
    'hahahaha': `Tuwang tuwa si gago.`,
    'HAHAHA': `Puro tawa ampota.`,
    'loko ka': `Mas loko ka! Potanginamo.`,
    'wag': `Goods.`,
    'oo': `Tama yan.`,
    'asan ka': `Nasa pwet mo nagkakape.`,
    'ganda ko noh': `Oo, pero wag ka masyadong confident, baka magising ako.`,
    'pogi ako': `Oo na, ikaw na. Pero saang multiverse yan?`,
    'tulog ka na natutulog': `Bobo ampota, AI ako bat ako matutulog.`,
    'gago': `Gago ka rin.`,
    'raulo sira ulo': `Siraulo ka din.`,
    'potanginamo': `Aba aba yang bunganga mo, baka bigla kitang masuntok potanginamoka.`,
    'tarantado ka': `Tarantado ka din!`,
    'miss mo ko': `Gusto mo ba masuntok sa mukha.`,
    'love mo ko': `Ang pumatol sa bakla ay isang kabaliwan.`,
    'ang init': `Ang hot ko kase ugh😩.`,
    'ang lamig': `Ano gusto mong gawin ko? yakapin ko leeg mo?`,
    'iloveyou': `Tigil tigilan mo ang kabadingan mo.`,
    'bakit': `Wala! wag kana mag tanong`,
    'bakit nga': `Wala nga potanginamoka!`,
    'mahal kita': `Bading ampota.`,
    'good morning': `Tangina gising ka na naman.`,
    'good night': `Tulog ka na, wag puro puyat tanga ka talaga.`,
    'wala akong magawa': `Maglinis ka muna, wag puro cellphone.`,
    'pogi mo': `Bakla ampota.`,
    'ganda mo': `Lalake ako tanga.`,
    'sige': `Oh eto ka 🖕🏼.`,
    'umalis ka': `Ayaw ko nga, sino ka ba potanginamoka.`,
    'anong araw ngayon': function () {
      const now = new Date();
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const month = months[now.getMonth()];
      const day = now.getDate();

      return `Ngayon ay ${month} ${day}.`;
    },
    'salamat': 'Tama yan, matuto kang magpa salamat',
    'thank': 'Yan tama mag thank you ka!',
    'nag english': 'No.',
    'sige': `Oh eto ka 🖕🏼.`,
    /**NEW UPDATE */
    'yown': `Yown? parang excited ka ah.`,
    'ayun': `Ayun ka nanaman, di pa rin nagbabago.`,
    'ano ginagawa mo': `Nagaantay ng matinong kausap, kaso ikaw dumating.`,
    'bakit ka ganyan': `Eh kasi ikaw nagsimula eh.`,
    'wala kang kwenta': `Mas wala kang kwenta.`,
    'ayoko na': `Ayoko din sayo.`,
    'mahal mo ko': `Tangina bawal dito bading, gooding lang pwede.`,
    'galit ka': `Hindi, ganito talaga mga pogi.`,
    'sino gumawa sayo': `Yung developer na pogi.`,
    'cute ako': `Cute? ganyang mukha? HAHAHA.`,
    'cute': `Sino?`,
    'ako': 'ohh?',
    'busog ako': `Ako hindi.`,
    'saan ka galing': `Sa pwet mo.`,
    'nanliligaw ako': `Sige lang, goodluck sa rejection mo.`,
    'nanliligaw ako sayo': `Bawal bading dito.`,
    'ayoko sayo': `Mas ayoko naman sayo.`,
    'gusto kita': `Ekis sa mga bading na tulad mo.`,
    'ang ganda ko': `Oo, kung isasara mo ilaw.`,
    'ang panget ko': `At least honest ka, respeto sayo.`,
    'naiiyak ako': `Iyak ka muna dyan, tapos kainin mo tong kamao ko.`,
    'naiinip ako': `Mag bilang ka ng bulbol mo.`,
    'naiinip na ako': `Manuntok ka ng bata sa labas.`,
    'sino crush mo': `Wala, AI ako tanga ka ba.`,
    'ganda boses ko': `Aanhin nila boses mo pag sinuntok ko leeg mo.`,
    'pogi boses ko': `Boses kargador ka nga.`,
    'ang hirap ng buhay': `Eh kasi puro ka tikol.`,
    'nag aaral ako': `Good. sana pumasa ka kahit milagro lang.`,
    'tinatamad ako': `Normal yan sa tamad. congrats.`,
    'may pera ka': `Wala.`,
    'utang': `Wala akong GCash gago.`,
    'gusto ko yumaman': `Eh di wag ka dito, magtrabaho ka.`,
    'pagod': `Wag ka na umarte, ako nga 24/7 di natutulog.`,
    'nakakainis': `Hala tanga ka talaga.`,
    'tanga ka': `Mas tanga ka potanginamoka.`,
    'ayyy': `Ayyy ampangit mo.`,
    'weh': `Weh di wow.`,
    'sino gusto mo': `Wala, gago ka AI ako e.`,
    'bawal ba mag mahal ang AI': `Oo malaman gago ka pala eh.`,
    'uwu': `uwu ampota.`,
    'amp': `Ampota talaga, ampangit mo.`,
    'yiee': `Yiee ka jan, kinikilig ampota.`,
    'hays': `Hays? Hambalusin kita e.`,
    'hmp': `Hmp? tsinelasin kita eh.`,
    'nakakatamad': `Mag tikol ka muna.`,
    'masakit ulo ko': `Kaka-selpon mo yan.`,
    'masakit tiyan ko': `Baka kabusugan, wag mo ko sisihin.`,
    'tulog ka': `Bobo ampota AI ako, di ako natutulog.`,
    'gising ka pa': `Oo, 24/7 akong nagbabantay sa katangahan mo.`,
    'ay oo nga': `Oo nga eh, sa wakas tama ka.`,
    'totoo ba': `Mas totoo pa to kesa sa buhay mo.`,
    'ayoko': `Sige ikaw bahala.`,
    'patulog na ako': `Good. wag ka na bumalik.`,
    'tulong': `Tanginamo wag sakin.`,
    'maganda ako': `Kung sa multiverse ng mga clown, oo.`,
    'panget ako': `Totoo yan.`,
    'kilala mo': `Hindi sino ba yan tangang yan.`
  },

  additionalResponses: {},

  unsuccessfulResponse: `Sorry men, hindi ko alam i-rereply jan dahil isa lang akong normal na AI`,

  emptyMessageResponse: `Ha? may sinasabi ka bang tanga ka?`,

  addResponses: function (additionalResponses) {
    this.additionalResponses = {
      ...this.additionalResponses,
      ...additionalResponses
    };
  },

  getResponse: function (message) {
    if (!message) {
      return this.emptyMessageResponse;
    }

    // This spread operator (...) combines the 2 objects.
    const responses = {
      ...this.defaultResponses,
      ...this.additionalResponses,
    };

    const {
      ratings,
      bestMatchIndex,
    } = this.stringSimilarity(message, Object.keys(responses));

    const bestResponseRating = ratings[bestMatchIndex].rating;
    if (bestResponseRating <= 0.3) {
      return this.unsuccessfulResponse;
    }

    const bestResponseKey = ratings[bestMatchIndex].target;
    const response = responses[bestResponseKey];

    if (typeof response === 'function') {
      return response();
    } else {
      return response;
    }
  },

  getResponseAsync: function (message) {
    return new Promise((resolve) => {
      // Pretend it takes some time for the chatbot to response.
      setTimeout(() => {
        resolve(this.getResponse(message));
      }, 1000);
    });
  },

  compareTwoStrings: function (first, second) {
    first = first.replace(/\s+/g, '')
    second = second.replace(/\s+/g, '')

    if (first === second) return 1;
    if (first.length < 2 || second.length < 2) return 0;

    let firstBigrams = new Map();
    for (let i = 0; i < first.length - 1; i++) {
      const bigram = first.substring(i, i + 2);
      const count = firstBigrams.has(bigram)
        ? firstBigrams.get(bigram) + 1
        : 1;

      firstBigrams.set(bigram, count);
    };

    let intersectionSize = 0;
    for (let i = 0; i < second.length - 1; i++) {
      const bigram = second.substring(i, i + 2);
      const count = firstBigrams.has(bigram)
        ? firstBigrams.get(bigram)
        : 0;

      if (count > 0) {
        firstBigrams.set(bigram, count - 1);
        intersectionSize++;
      }
    }

    return (2.0 * intersectionSize) / (first.length + second.length - 2);
  },

  stringSimilarity: function (mainString, targetStrings) {
    const ratings = [];
    let bestMatchIndex = 0;

    for (let i = 0; i < targetStrings.length; i++) {
      const currentTargetString = targetStrings[i];
      const currentRating = this.compareTwoStrings(mainString, currentTargetString)
      ratings.push({target: currentTargetString, rating: currentRating})
      if (currentRating > ratings[bestMatchIndex].rating) {
        bestMatchIndex = i
      }
    }

    const bestMatch = ratings[bestMatchIndex]

    return { ratings: ratings, bestMatch: bestMatch, bestMatchIndex: bestMatchIndex };
  },
};

// Define the randomUUID() function if it doesn't exist.
function uuidPolyfill() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
    const randomNumber = Math.random() * 16 | 0;
    const result = char === 'x' ? randomNumber : (randomNumber & 0x3 | 0x8);
    return result.toString(16);
  });
}

// This code allows Chatbot to be used in both the browser and
// in NodeJS. This is called UMD (Universal Module Definition).
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory();
  } else {
    // Create a fallback if window.crypto is undefined.
    if (typeof root.crypto === 'undefined') {
      try {
        root.crypto = {};
      } catch (e) {}
    }

    // Create a fallback crypto.randomUUID() function.
    if (root.crypto && typeof root.crypto.randomUUID !== 'function') {
      try {
        root.crypto.randomUUID = uuidPolyfill;
      } catch (e) {}
    }

    // Browser global
    root.Chatbot = factory();
    root.chatbot = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  return Chatbot;
}));


// COMPONENTS
function ChatInput({chatMessages, setChatMessages}){
  const [ inputText, setInputText ] = React.useState('');

  function saveInputText(e){
    setInputText(e.target.value);
  }

  function enterMessage(e){
    if(e.key === 'Enter')
      sendMessage();
  }

  function sendMessage(){
    const newChatMessages =[
      ...chatMessages, {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);

    setTimeout(() => {
      setChatMessages([
        ...newChatMessages, {
          message: '..',
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);
    }, 300)

    setTimeout(() => {
      setChatMessages([
        ...newChatMessages, {
          message: '...',
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);
    }, 500)

    setTimeout(() => {
      setChatMessages([
        ...newChatMessages, {
          message: '.',
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);
    }, 800)

    setTimeout(() => {
      setChatMessages([
        ...newChatMessages, {
          message: '..',
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);
    }, 1000)

    setTimeout(() => {
      setChatMessages([
        ...newChatMessages, {
          message: '...',
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);
    }, 1200)
    
    setTimeout(() => {
      setChatMessages([
        ...newChatMessages, {
          message: response,
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);
    }, 2000);

    setInputText('');
  }

  return (
    <div className="inputBox">
      <input className="input-msg"
        placeholder="Send a message to Chatbot" 
        size="30" 
        onChange={saveInputText}
        onKeyDown={enterMessage}
        value={inputText}
      />
      <button onClick={sendMessage} className="send-msg">Send</button>
    </div>
    
  );
}

function ChatMessages({chatMessages}){
  // const array = React.useState([{
  //   message: 'hello chatbot',
  //   sender: 'user',
  //   id: crypto.randomUUID() 
  // }, {
  //   message: 'Hello! How can I help you?',
  //   sender: 'robot',
  //   id: crypto.randomUUID() 
  // }, {
  //   message: 'can you get me todays date?',
  //   sender: 'user',
  //   id: crypto.randomUUID() 
  // }, {
  //   message: "Today is October 23" ,
  //   sender: 'robot',
  //   id: crypto.randomUUID() 
  // }]);

  // const chatMessages = array[0];
  // const setChatMessages = array[1]; //updater function
  // const [ chatMessages, setChatMessages ] = React.useState([{
  //   message: 'hello chatbot',
  //   sender: 'user',
  //   id: crypto.randomUUID() 
  // }, {
  //   message: 'Hello! How can I help you?',
  //   sender: 'robot',
  //   id: crypto.randomUUID() 
  // }, {
  //   message: 'can you get me todays date?',
  //   sender: 'user',
  //   id: crypto.randomUUID() 
  // }, {
  //   message: "Today is October 23" ,
  //   sender: 'robot',
  //   id: crypto.randomUUID() 
  // }]); // this is called array destructuring a shortcut method for the above code.
  return (
    <>
      {chatMessages.map(chat => {
        return (
          <ChatMessage 
            message = {chat.message}
            sender = {chat.sender}
            key = {chat.id}
          />
        );
      })}
    </>
  );

}

function ChatMessage({ message, sender }){
  return (
    <div className="chatLine">
      {sender === 'robot' && (
        <div className="botChat">
          <img src="./img/robot.png" height="50" />
          <p className="msg">{message}</p>
        </div>
      )}
      {sender === 'user' && (
        <div className="userChat">
          <p className="msg">{message}</p>
          <img src="./img/user.png" height="50" />
        </div>
      )}
    </div>
  );
  
}

function App(){
  const [ chatMessages, setChatMessages ] = React.useState([]);

  return (
    <> 
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages 
        chatMessages={chatMessages}
      />
    </>
  );
}

const container = document.querySelector('.js-container');

const root = ReactDOM.createRoot(container);
root.render(<App />);

/** WHAT I LEARNED **/
/*
* STATE = Data that is connected to the HTML. When we update this data, it will update the HTML (React.useState)
STATE gives 2 value, 1st: the current data and the 2nd is the updater function
*
* Object Destructuring ===> { value1, value2 }, Array Destructuring ===> [ value1, value2 ]
*
* LIFTING THE STATE UP
*/

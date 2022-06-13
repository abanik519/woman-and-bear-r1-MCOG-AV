import React, { Component } from "react";
import "./App.css";
import image01 from "./images/page01wf.png";
import image02 from "./images/page02wf.png";
import image03 from "./images/page03wf.png";
import image04 from "./images/page04wf.png";
import image05 from "./images/page05wf.png";
import image06 from "./images/page06wf.png";
import image07 from "./images/page07wf.png";
import image08 from "./images/page08wf.png";
import image09 from "./images/page09wf.png";
import image10 from "./images/page10wf.png";
import image11 from "./images/page11wf.png";

import avatar from "./images/Avatar.png";
import salmon from "./images/salmon.jpg";
import steak from "./images/steak.jpg";
import chocolate from "./images/chocolate.jpg";
import flowers from "./images/flowers.jpg";
import igloo from "./images/igloo.jpg";

import intro from "./audio/intro.mp3";
import one from "./audio/1.1_metacog.mp3";
import two from "./audio/1.2_metacog.mp3";
import three from "./audio/1.3_metacog.mp3";
import four from "./audio/1.4_metacog.mp3";
import five from "./audio/1.5_metacog.mp3";
import six from "./audio/1.6_metacog.mp3";
import seven from "./audio/1.7_metacog.mp3";
import eight from "./audio/1.8_metacog.mp3";
import nine from "./audio/1.9_metacog.mp3";
import ten from "./audio/1.10_metacog.mp3";
import eleven from "./audio/1.11_metacog1.mp3";

var slideIndex = 1;
export class App extends Component {
  constructor(props) {
    super();
    this.firstQ = React.createRef();
  }

  componentDidUpdate() {
    this.showSlides(slideIndex);
  }

  showSlides(n) {
    if (document.getElementById("book")) {
      var i;
      var slides = Array.from(document.getElementsByClassName("slide"));
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "flex";
    }
  }

  plusSlides(n) {
    if (document.getElementById("pageNum")) {
      this.showSlides((slideIndex += n));
      document.getElementById("pageNum").innerHTML = String(slideIndex - 1);
      if (slideIndex == 1) {
        document.getElementById("pageNum").innerHTML = "";
      }
      if (n > 0) {
        //document.getElementById("n").style.display = "none";
      } else {
        document.getElementById("n").style.display = "block";
      }
      if (slideIndex >= 3) {
        document.getElementById("p").style.display = "block";
      } else {
        //document.getElementById("p").style.display = "none";
      }
    }
  }

  toggle(id) {
    if (document.getElementById(id)) {
      var text = document.getElementById(id).style.display;
      if (text == "flex") {
        document.getElementById(id).style.display = "none";
      } else {
        document.getElementById(id).style.display = "flex";
      }
    }
  }

  toggleBlock(id) {
    if (document.getElementById(id)) {
      var text = document.getElementById(id).style.display;
      if (text == "flex") {
        document.getElementById(id).style.display = "none";
      } else {
        document.getElementById(id).style.display = "block";
      }
    }
  }

  show(id) {
    if (document.getElementById(id)) {
      document.getElementById(id).style.display = "block";
    }
  }

  toggleSound(id) {
    var sound = document.getElementById(id);
    if (sound.paused || sound.duration == 0) {
      sound.play();
    } else {
      sound.pause();
    }
  }

  hide(id) {
    if (document.getElementById(id)) {
      document.getElementById(id).style.display = "none";
    }
  }

  showNext() {
    if (document.getElementById("n")) {
      document.getElementById("n").style.display = "block";
    }
  }

  playQuestion() {
    if (
      document.getElementById("story-retel") &&
      document.getElementById("pause") &&
      document.getElementById("play")
    ) {
      var question = document.getElementById("story-retel");
      console.log(question.duration);
      document.getElementById("pause").style.display = "block";
      document.getElementById("play").style.display = "none";
      question.play();
    }
  }

  updateTime() {
    var question = document.getElementById("story-retel");
    document.getElementById("audio-time").innerHTML = question.currentTime;
  }

  pauseQuestion() {
    if (
      document.getElementById("story-retel") &&
      document.getElementById("pause") &&
      document.getElementById("play")
    ) {
      var question = document.getElementById("story-retel");
      console.log(question.currentTime);
      document.getElementById("pause").style.display = "none";
      document.getElementById("play").style.display = "block";
      question.pause();
    }
  }

  selectOption(id, num) {
    var options = ["a", "b", "c"];
    for (var i = 0; i < options.length; i++) {
      var optionId = num + options[i];
      document.getElementById(optionId).style.fontWeight = "normal";
    }
    document.getElementById(id).style.fontWeight = "bold";
  }

  record() {
    if (document.getElementById("recordButton")) {
      if (document.getElementById("recordButton").innerHTML == "ENREGISTRER") {
        document.getElementById("recordButton").innerHTML = "PAUSE";
      } else {
        document.getElementById("recordButton").innerHTML = "ENREGISTRER";
      }
    }
  }

  render() {
    return (
      <div id="book">
        <audio id="one">
          <source src={one} type="audio/mpeg" />
        </audio>
        <audio id="two">
          <source src={two} type="audio/mpeg" />
        </audio>
        <audio id="three">
          <source src={three} type="audio/mpeg" />
        </audio>
        <audio id="four">
          <source src={four} type="audio/mpeg" />
        </audio>
        <audio id="five">
          <source src={five} type="audio/mpeg" />
        </audio>
        <audio id="six">
          <source src={six} type="audio/mpeg" />
        </audio>
        <audio id="seven">
          <source src={seven} type="audio/mpeg" />
        </audio>
        <audio id="eight">
          <source src={eight} type="audio/mpeg" />
        </audio>
        <audio id="nine">
          <source src={nine} type="audio/mpeg" />
        </audio>
        <audio id="ten">
          <source src={ten} type="audio/mpeg" />
        </audio>
        <audio id="eleven">
          <source src={eleven} type="audio/mpeg" />
        </audio>

        {/* Slideshow container */}
        <div className="phoneText">Not available on this device</div>

        <div className="slideshow-container">
          <div className="title">The Woman and Her Bear </div>
          <div className="slide-container">
            <div className="arrow-container">
              <div className="next" id="p" onClick={() => this.plusSlides(-1)}>
                &#10094;
              </div>
            </div>

            {/* Slides */}
            {/* Intro Slide */}
            <div className="slide fade" style={{ display: "flex" }}>
              <div className="image-container">
                <img className="image" src={image01} alt="Intro page image" />
                <div className="avatar-container">
                  <div className="flex-row">
                    <img
                      className="avatar"
                      src={avatar}
                      alt="Owl avatar"
                      onClick={() => {
                        this.show("intro");
                        this.hide("click1");
                        this.showNext();
                      }}
                    />
                    <i id="click1" class="fa fa-arrow-left">
                      &larr;Click Here
                    </i>
                  </div>
                </div>
                <div id="intro" className="speech sb1">
                  You will read the story "The Woman and her Bear." This story
                  is a folktale told by the Inuit. A folktale is a traditional
                  story that is passed down from one generation to another by
                  word of mouth. Folktales usually explain something. Often
                  folktales are a way for older people to teach young people how
                  to behave in their local community. The Inuit homeland is
                  known as Inuit Nunangat, meaning the land, ice, and water in
                  the Artic regions that we call Alaska, Yukon, Northwest
                  Territory, Nunavut including Baffin Island, and Greenland.
                  Click here for a short video about living in Inuit Nunangat.{" "}
                </div>
                <audio id="intro-sound">
                  <source src={intro} type="audio/mpeg" />
                </audio>
              </div>
            </div>
            {/* Slide 1 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image01} alt="First page image" />
                <div className="avatar-container">
                  <div className="flex-row">
                    <img className="avatar" src={avatar} alt="Owl avatar" />
                  </div>
                  <p>
                    Long ago in the far north, there lived a village of people
                    known as a the Inuit. They lived on the shores of the icy
                    Arctic. They depended upon the bounty of the salmon and seal
                    and the creatures of the snow to feed themselves. All the
                    young men were hunters and fishers.
                    <span
                      className="doneButton"
                      id="done1"
                      onClick={() => {
                        this.toggle("s1");
                        this.hide("done1");
                        this.showNext();
                        this.toggleSound("one");
                      }}
                    >
                      Done
                    </span>
                  </p>
                  <div id="s1" className="speech2">
                    <img src={igloo} className="choice-image" />
                    Notice that the Inuit live in igloos in the winter. An igloo
                    is a dome-shaped dwelling made from ice. Why did they make
                    their homes from ice? Do you think it is warm inside?
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image02} alt="Second page image" />
                <div className="avatar-container">
                  <div className="flex-row">
                    <img
                      className="avatar"
                      src={avatar}
                      alt="Owl avatar"
                      onClick={() => {
                        this.showNext();
                        this.hide("click3");
                        this.toggle("s2");
                        this.toggleSound("two");
                      }}
                    />
                  </div>
                  <p>
                    One old woman lived alone. She had no husband and no sons to
                    hunt or fish for her. Her neighbors shared their food with
                    her but she was lonely. She longed for a family of her own.
                    She often walked along the{" "}
                    <span className="highlight">shore</span>, looking far out to
                    sea, praying that the gods might send her a son.
                  </p>
                  <div id="s2" className="dictionary">
                    <span className="bold">shore(noun):</span> The land along
                    the edge of a sea, lake or other large body of water.
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image03} alt="Third page image" />
                <div className="avatar-container">
                  <div className="flex-row">
                    <img
                      className="avatar"
                      src={avatar}
                      alt="Owl avatar"
                      onClick={() => {
                        this.showNext();
                        this.hide("click4");
                        this.toggle("s3");
                        this.toggleSound("three");
                      }}
                    />
                  </div>
                  <p>
                    One cold winter day, the woman was walking by the sea when
                    she <span className="highlight">spotted</span> a tiny white
                    polar bear sitting all alone on the thick ice. His mother
                    was nowhere in sight. "Someone must have killed her," she
                    said softly, and she walked onto the ice, picked up the cub
                    and looked into his eyes. "You will be my son," she said.
                    She called him Kunik.
                  </p>
                  <div id="s3" className="multiple">
                    Look again at the story. What does the word spotted mean in
                    the story?
                    <div
                      className="choice"
                      id="3a"
                      onClick={() => this.selectOption("3a", 3)}
                    >
                      (a) The bear was white with dark spots on his fur.
                    </div>
                    <div
                      className="choice"
                      id="3b"
                      onClick={() => this.selectOption("3b", 3)}
                    >
                      (b) The old woman noticed the bear.{" "}
                    </div>
                    <div
                      className="choice"
                      id="3c"
                      onClick={() => this.selectOption("3c", 3)}
                    >
                      (c) The bear's bright white fur looked speckled in the
                      sun.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 4 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image04} alt="Fourth page image" />
                <div className="avatar-container">
                  <div className="flex-row">
                    <img
                      className="avatar"
                      src={avatar}
                      alt="Owl avatar"
                      onClick={() => {
                        this.showNext();
                        this.hide("click5");
                        this.toggle("s4");
                        this.toggleSound("four");
                      }}
                    />
                  </div>
                  <p>
                    The old woman took her cub back to her home. From that day
                    on, she <span className="highlight">shared</span> all her
                    food with Kunik, and a strong bond grew between the two.
                  </p>
                  <div id="s4" className="speech2">
                    Do you share food with anyone in your family? A pet or a
                    brother or sister?
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 5 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image05} alt="Fifth page image" />
                <div className="avatar-container">
                  <img
                    className="avatar"
                    src={avatar}
                    alt="Owl avatar"
                    onClick={() => {
                      this.showNext();
                      this.toggle("s5");
                      this.toggleSound("five");
                    }}
                  />
                  <p>
                    The village children loved Kunik, too. Now the woman was
                    never <span className="highlight">lonely</span>, for her
                    son, the bear, and all the village children kept her company
                    all day. She would stand by her igloo and smile as Kunik and
                    the children rolled in the snow and slid on the ice. Kunik
                    was gentle with the children as if they were his brothers
                    and sisters.
                  </p>
                  <div id="s5" className="multiple">
                    Why is the woman not lonely?
                    <div
                      className="choice"
                      id="5a"
                      onClick={() => this.selectOption("5a", 5)}
                    >
                      (a) She plays with the bear in the snow.
                    </div>
                    <div
                      className="choice"
                      id="5b"
                      onClick={() => this.selectOption("5b", 5)}
                    >
                      (b) The bear and the children entertain her all day.
                    </div>
                    <div
                      className="choice"
                      id="5c"
                      onClick={() => this.selectOption("5c", 5)}
                    >
                      (c) Kunik is gentle with the children.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 6 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image06} alt="Sixth page image" />
                <div className="avatar-container">
                  <img
                    className="avatar"
                    src={avatar}
                    alt="Owl avatar"
                    onClick={() => {
                      this.showNext();
                      this.toggle("s6");
                      this.toggleSound("six");
                    }}
                  />
                  <p>
                    Kunk grew taller and smarter. The children taught him to
                    fish. By springtime he was fishing on his own, and every
                    afternoon he came home carrying fresh salmon for his mother.
                    The old woman was now the happiest of all the villagers. She
                    was so <span className="highlight">proud</span> of the her
                    little bear that whenever he returned home, she would say
                    proudly to anyone nearby, "He's the finest fisher in all the
                    village."
                  </p>
                  <div id="s6" className="speech2">
                    The old woman is proud of Kunik's fishing skills. What can
                    you do that makes your family proud?
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 7 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image07} alt="Seventh page image" />
                <div className="avatar-container">
                  <img
                    className="avatar"
                    src={avatar}
                    alt="Owl avatar"
                    onClick={() => {
                      this.showNext();
                      this.toggle("s7");
                      this.toggleSound("seven");
                    }}
                  />
                  <p>
                    Before long the men began to began to feel{" "}
                    <span className="highlight">envious</span>. "What will we
                    do?" they asked each other. "That bear brings home the
                    fattest seals and the biggest salmon. "He must be stopped,"
                    another man said, "He has grown far too big. He is a danger
                    to our families." The men decided to kill the bear. Although
                    they knew how much the old woman loved the bear, their envy
                    made them mean.
                  </p>
                  <div id="s7" className="multiple">
                    Select the word that is a synonym for envious:
                    <div
                      className="choice"
                      id="7a"
                      onClick={() => this.selectOption("7a", 7)}
                    >
                      (a) mean
                    </div>
                    <div
                      className="choice"
                      id="7b"
                      onClick={() => this.selectOption("7b", 7)}
                    >
                      (b) frightened
                    </div>
                    <div
                      className="choice"
                      id="7c"
                      onClick={() => this.selectOption("7c", 7)}
                    >
                      (c) jealous
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 8 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image08} alt="Eight page image" />
                <div className="avatar-container">
                  <img
                    className="avatar"
                    src={avatar}
                    alt="Owl avatar"
                    onClick={() => {
                      this.showNext();
                      this.toggle("s8");
                      this.toggleSound("eight");
                    }}
                  />
                  <p>
                    A little boy overheard the men talking. He ran to the old
                    woman's home to tell her of the terrible plan. When she
                    heard the news, she threw her arms around the bear and{" "}
                    <span className="highlight">wept</span>. "No," she said,
                    "they must not kill my child." At once she set off to visit
                    every igloo in the village. She begged each man not to kill
                    her beautiful bear. "He is a danger to our children," they
                    said. "We cannot let him live."
                  </p>
                  <div id="s8" className="speech2">
                    The old woman is weeping because she is afraid for Kunik.
                    What do you think will happen?
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 9 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image09} alt="Ninth page image" />
                <div className="avatar-container">
                  <img
                    className="avatar"
                    src={avatar}
                    alt="Owl avatar"
                    onClick={() => {
                      this.showNext();
                      this.toggleBlock("s9");
                      this.toggleSound("nine");
                    }}
                  />
                  <p>
                    The old woman ran home and said to Kunik, "Your life is in
                    danger. Run away, but don't go so far that I cannot find
                    you." He had tears in his eyes but he{" "}
                    <span className="highlight">obeyed</span> his mother's
                    wishes.
                  </p>
                  <div id="s9" className="speech2">
                    Kunik obeyed his mother's wishes. Fill in the blank in this
                    sentence so that it says the same thing with new words:
                    Kunik <input className="input-word" /> his mother's
                    instructions.
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 10 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image10} alt="Tenth page image" />
                <div className="avatar-container">
                  <img
                    className="avatar"
                    src={avatar}
                    alt="Owl avatar"
                    onClick={() => {
                      this.showNext();
                      this.toggle("s10");
                      this.toggleSound("ten");
                    }}
                  />
                  <p>
                    For many days the old woman and the children grieved their
                    loss. And then one morning the old woman went out looking
                    for Kunik. After many hours of walking and calling his name,
                    she saw her bear running towards her. They embraced but
                    Kunik could see that his mother was hungry so he ran to get
                    her fresh meat. The old woman cut up the fresh seal. She
                    gave her son the best slices of blubber and carried the rest
                    home. Every day after that the old woman met her son. The
                    bear brought his mother fresh meat or fish.
                  </p>
                  <div id="s10" className="multiple">
                    Kunik brought food for his mother because he loves her.
                    Which of these would you give to someone you love?
                    <div
                      className="flex-row"
                      style={{ justifyContent: "space-evenly" }}
                    >
                      <img src={salmon} className="choice-image" />
                      <img src={chocolate} className="choice-image" />
                      <img src={steak} className="choice-image" />
                      <img src={flowers} className="choice-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 11 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image11} alt="Tenth page image" />
                <div className="avatar-container">
                  <img
                    className="avatar"
                    src={avatar}
                    alt="Owl avatar"
                    onClick={() => {
                      this.showNext();
                      this.toggle("s11");
                      this.toggleSound("eleven");
                    }}
                  />
                  <p>
                    After awhile the villagers grew to understand the love
                    between the woman and the bear was strong and true. From
                    that point on, they told with pride and respect the tale of
                    the unbroken love between the old woman and her son.
                  </p>
                  <div id="s11" className="speech2">
                    Make sentences to show what happened first and what happened
                    next. [show scrambled list of phrases to fill in the blanks]
                    First the woman found the bear and then she was not lonely
                    any more.First Kunik was small and then he became taller and
                    smarter.First the woman shared her food with Kunik and then
                    he brought her the biggest salmon.First the men were envious
                    and afraid of Kunik and then they were proud and respected
                    him.{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="arrow-container">
              <div className="next" id="n" onClick={() => this.plusSlides(1)}>
                &#10095;
              </div>
            </div>
          </div>

          <div className="pageNum-container">
            <p id="pageNum"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

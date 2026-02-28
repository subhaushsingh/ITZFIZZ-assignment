import './App.css'

function App() {
  return (
    <>
      <div id="loading-screen">
        <div id="progress-bar"></div>
        <div id="progress-counter">0%</div>
      </div>

      <div className="hero  flex flex-col justify-end items-center h-screen opacity-0 transition-opacity duration-1000 ease-in">
        <div className="sun flex flex-col items-center relative w-full h-full justify-end">
          <div className="semicircle w-[40%] h-[20vw] bg-white rounded-t-[2000px] absolute bottom-0 text-white mix-blend-difference"></div>
          <div className="line"></div>
        </div>
        <div className="road bg-white [clip-path:polygon(50%_0,100%_100%,0_100%)] w-screen h-full relative bottom-0 text-white mix-blend-difference"></div>
      </div>

      <div className="part1">
        <p className="sitename">UI ROAD TRIP</p>

        <div className="spacer"></div>

        <div className="big-text">
          <p className="fadein">SAY HELLO</p>
          <p className="fadein">TO THESE</p>
          <p className="fadein">HUGE TEXTS</p>
        </div>
      </div>

      <div className="horizontal-container">
        <div className="horizontal-wrapper">
          <div className="horizontal-scroller">
            <div className="row">
              <div className="item filled">
                <p>We have some amazing content on this site. Wanna check 'em out?</p>
                <a className="link item-link">
                  <span className="link-text" data-text="Check our content">
                    Check our content
                  </span>
                </a>
              </div>

              <div className="item filled">
                <p>
                  Fun fact: Did you know that minimalism is on the rise? UIs now
                  use fewer colors, simple typography, and generous white space.
                </p>
              </div>

              <div className="item big">
                <p>5,667 Cups of Coffee</p>
              </div>

              <div className="item filled">
                <p>
                  Did you know that users can memorize only around 6-7 chunks of
                  data while browsing a webpage?
                </p>
                <a className="link item-link">
                  <span className="link-text" data-text="Learn more">
                    Learn more
                  </span>
                </a>
              </div>

              <div className="item filled big">
                <p>How is your UX doing?</p>
              </div>

              <div className="item">
                <p>
                  Fun fact 3: CSS Grids were first introduced in 2011 by
                  Microsoft.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="item big">
                <p>Scroll is the new click.</p>
              </div>

              <div className="item filled">
                <p>
                  Do you like scrolling forever? Check out our infinite scrolling page.
                </p>
                <a className="link item-link">
                  <span className="link-text" data-text="Check it out">
                    Check it out
                  </span>
                </a>
              </div>

              <div className="item filled">
                <p>
                  Fun fact 2: None of these links actually lead anywhere except the last link.
                </p>
              </div>

              <div className="item big">
                <p># I &lt;3 GSAP</p>
              </div>

              <div className="item filled">
                <p><b>Tip:</b> Search 'GSAP Horizontal Scroll' in the code.</p>
              </div>

              <div className="item filled">
                <p>Gotta go already? Check back later.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cards-container">
        <div className="cards">
          <div className="cards-text-container">
            <div className="cards-text">
              <h2>DO YOU LIKE CARDS?</h2>
              <p>Well, you'd better.</p>
              <p>No worries though. Keep scrollin'.</p>
              <p>This is just the beginning.</p>
            </div>

            <div className="cards-text">
              <h2>CARD AFTER CARD</h2>
              <p>Just to get your focus here.</p>
              <p>Hope you're enjoying your free set of cards.</p>
            </div>

            <div className="cards-text">
              <h2>NOW YOU TRY</h2>
              <p>Time to get your hands dirty.</p>
              <p>Search 'Cards' in the code.</p>
            </div>

            <div className="cards-cta">GET STARTED</div>
          </div>

          <div className="cards-image-container">
            <div className="cards-image">
              <img className="image" src="https://github.com/juxtopposed/codepen/blob/main/cards.png?raw=true" />
              <img className="alt" src="https://github.com/juxtopposed/codepen/blob/main/cards.png?raw=true" />
            </div>

            <div className="cards-image">
              <img className="image" src="https://github.com/juxtopposed/codepen/blob/main/zoom.png?raw=true" />
              <img className="alt" src="https://github.com/juxtopposed/codepen/blob/main/zoom.png?raw=true" />
            </div>

            <div className="cards-image">
              <img className="image" src="https://github.com/juxtopposed/codepen/blob/main/3dcards.png?raw=true" />
              <img className="alt" src="https://github.com/juxtopposed/codepen/blob/main/3dcards.png?raw=true" />
            </div>
          </div>
        </div>
      </div>

      <div className="zoom-container">
        <div className="zoom">
          <h2 className="zoom-heading">KEEP SCROLLING TO ZOOM</h2>
          <div className="zoom-circle"></div>
          <h3 className="zoom-content">ZOOM INNN</h3>

          <div className="footer">
            <p className="footer-content">Thanks for watching!</p>
            <a
              className="footer-content link"
              href="https://twitter.com/juxtopposed"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-text" data-text="Let's connect">
                Let's connect
              </span>
            </a>
          </div>
        </div>
      </div>

      <div style={{ height: "300vh" }}></div>
    </>
  )
}

export default App
import { useState } from "react";
import { SnowOverlay } from "react-snow-overlay";
import { useTypewriter, Cursor } from "react-simple-typewriter"; // Importing the hook
import "./App.css";

function App() {
    const [hovered, setHovered] = useState(false);
    const [gift, setGift] = useState(false);
    const [hidden, setHidden] = useState(1);

    // Using the typewriter hook for the message text
    const [text] = useTypewriter({
      words: [
        "May your holidays be filled with joy, love, and endless peace. Wishing you a magical season! 🎄❤️"
       
      ],
      loop: false, // Set to false to prevent looping
      deleteSpeed: Infinity, // Prevents deletion of text
      typeSpeed: 50, // Faster typing speed (lower value means faster typing)
      deleteSpeed: 50,
    });

    const handleClose = () => {
        setGift(false); // Close the modal when clicked
        setHidden(1); // Reset to the first stage
    };

    return (
        <div className="containerko">
            <SnowOverlay />
            <h1 className="merry">Merry Christmas</h1>
            {/* Applying the typewriter effect to the message paragraph */}
            <p className="message">{text}<Cursor /></p>
            <button
                className="gift-button"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => setGift(true)}
            >
                <span className={hovered ? "hovered" : ""}>
                    {hovered ? "Just kidding, Click me!" : "Namamasko po 🎁"}
                </span>
            </button>

            {/* Gift Modal */}
            {gift ? (
                <div className="package">
                    <div className="modal-container">
                        {/* Stage 1 */}
                        {hidden === 1 && (
                            <>
                            <img
                                    src="1112.png"  // Replace with the URL of your image
                                    alt="Holiday Image"
                                    className="modal-image"
                                />
                                <h1>Hi merry christmas!</h1>
                                <p>just wanna shoot my shot!</p>
                                <button className="gift-button" onClick={() => setHidden(2)}>
                                    click mo ulit
                                </button>
                            </>
                        )}

                        {hidden === 2 && (
                            <>
                                <h1>Santa tell me if you're really there</h1>
                                <p> we would chat until next year</p>
                                <button className="gift-button" onClick={() => setHidden(3)}>
                                    last na
                                </button>
                            </>
                        )}

                        {hidden === 3 && (
                            <>
                                <p className="liham">All I want for Christmas is you</p>
                                <button className="gift-button" onClick={handleClose}>
                                    Close
                                </button>
                            </>
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default App;

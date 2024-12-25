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
            "May your holidays be filled with joy, love, and endless peace. Wishing you a magical season! 🎄❤️",
        ],
        loop: false,
        deleteSpeed: Infinity,
        typeSpeed: 50,
        deleteSpeed: 50,
    });

    const handleClose = () => {
        setGift(false);
        setHidden(1);
    };

    return (
        <div className="containerko">
            <SnowOverlay />
            <h1 className="merry">Merry Christmas</h1>

            <p className="message">
                {text}
                <Cursor />
            </p>
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
                                    src="1112.png"
                                    alt="Holiday Image"
                                    className="modal-image"
                                />
                                <h1>Hi merry christmas!</h1>
                                <p>just wanna shoot my shot!</p>
                                <button
                                    className="gift-button"
                                    onClick={() => setHidden(2)}
                                >
                                    click mo ulit
                                </button>
                            </>
                        )}

                        {hidden === 2 && (
                            <>
                                <h1>Kotse ka ba?</h1>
                                <p>kasi ang english ng kotse ay car</p>
                                <button
                                    className="gift-button"
                                    onClick={() => setHidden(3)}
                                >
                                    Last na
                                </button>
                            </>
                        )}

                        {hidden === 3 && (
                            <>
                                <p className="liham">namamasko po 🎅</p>
                                <img
                                    src="qr.png" // Replace with the correct path to your GCash QR code
                                    alt="GCash QR Code"
                                    className="gcash-qr" // Apply styling if needed
                                />
                                <button
                                    className="gift-button"
                                    onClick={handleClose}
                                >
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

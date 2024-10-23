/** @format */

const MeetingCard = () => {
    return (
        <div className="meeting-card">
            <img
                alt="purduepete"
                src="purduepete.jpg"
                style={{
                    padding: "10px 20px",
                    textAlign: "center",
                    color: "goldenrod",
                    background: "beige",
                    width: "50px",
                }}
            />
            <h2>Meeting Information</h2>
            <button>Show Parking Info</button>
        </div>
    );
};

export default MeetingCard;
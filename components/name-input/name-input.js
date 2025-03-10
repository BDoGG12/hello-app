
import { useState } from "react";

const NameInput = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page reload

        try {
            const response = await fetch('/api/hello', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstName, lastName })
            });

            const data = await response.json();

            if (data.success) {
                setResponseMessage(data.message);
            } else {
                // If the API call failed, handle the error accordingly
                setResponseMessage(data.error || 'Something went wrong');
            }
        } catch (error) {
            console.error('Error sending request:', error);
            setResponseMessage('An error occurred while sending the request.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        First Name:
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </label>
                </div>

                <button type="submit">Submit</button>
            </form>
            {responseMessage && (
                <p style={{ marginTop: '20px' }}>Response: {responseMessage}</p>
            )}
        </div>
    );


};

export default NameInput;
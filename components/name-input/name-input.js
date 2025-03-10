
import { useState } from "react";

const NameInput = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Hello ${firstName} ${lastName}`);
    };

    return (
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
    );


};

export default NameInput;
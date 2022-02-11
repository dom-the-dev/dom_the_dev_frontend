import axios from 'axios';
import {useState} from "react";


const ContactForm = () => {

    const [state, setState] = useState({
        email: '',
        message: '',
        file: null
    });

    function handleChange(e) {
        if (e.target.files) {
            setState({...state, [e.target.name]: e.target.files[0]});
        } else {
            setState({...state, [e.target.name]: e.target.value});
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        let formData = new FormData();

        for (let [key, value] of Object.entries(state)) {
            formData.append(key, value);
        }

        // Use fetch or axios to submit the form
        await axios.post("https://formeezy.com/api/v1/forms/6205d68a11dec300092762fc/submissions", formData)
            .then(({data}) => {
                const {redirect} = data;
                // Redirect used for reCAPTCHA and/or thank you page
                window.location.href = redirect;
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    className={"bg-transparent text-dark dark:text-white p-2 border-b border-dark dark:border-white  w-full my-2"}
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={state.email}
                    required
                />
                <textarea name="message"
                          className={"bg-transparent text-dark dark:text-white p-2 border-b border-dark dark:border-white w-full my-2"}
                          placeholder="Enter message"
                          onChange={handleChange}
                          value={state.message}
                          required
                />
                <button
                    className={"rounded-2xl px-3 py-1 transition border border-primary text-dark dark:text-primary bg:text-primary bg-primary dark:bg-transparent hover:bg-transparent dark:hover:bg-primary dark:hover:text-dark"}
                    type="submit"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
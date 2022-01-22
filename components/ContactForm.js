import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <form action="https://getform.io/f/c223ec51-cf67-408c-8661-b7ef918f27cb" method="POST">
                <input placeholder={"name"}
                       className={"bg-transparent text-white p-2 border-b border-dark dark:border-white  w-full my-2"}
                       type="text" name="name"/> <br/>
                <input placeholder={"email"}
                       className={"bg-transparent text-white p-2 border-b border-dark dark:border-white w-full my-2"}
                       type="email" name="email"/> <br/>
                <textarea name="message" id="message" placeholder={"message"} cols="30" rows="10"
                          className={"bg-transparent text-white p-2 border-b border-dark dark:border-white w-full my-2"}/>
                <br/>
                <button
                    type="submit"
                    className={"px-2 py-1 bg-dark md:bg-primary text-dark hover:text-dark rounded-2xl"}
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
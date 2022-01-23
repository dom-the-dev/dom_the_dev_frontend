import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <form action="https://getform.io/f/c223ec51-cf67-408c-8661-b7ef918f27cb" method="POST">
                <input placeholder={"name"}
                       className={"bg-transparent text-dark dark:text-white p-2 border-b border-dark dark:border-white  w-full my-2"}
                       type="text" name="name"/> <br/>
                <input placeholder={"email"}
                       className={"bg-transparent text-dark dark:text-white p-2 border-b border-dark dark:border-white w-full my-2"}
                       type="email" name="email"/> <br/>
                <textarea name="message" id="message" placeholder={"message"} cols="30" rows="10"
                          className={"bg-transparent text-dark dark:text-white p-2 border-b border-dark dark:border-white w-full my-2"}/>
                <br/>
                <button
                    type="submit"
                    className={"rounded-2xl px-3 py-1 transition border border-primary text-dark dark:text-primary bg:text-primary bg-primary dark:bg-transparent hover:bg-transparent dark:hover:bg-primary dark:hover:text-dark"}
                >
                    send
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import MagicButton from "./ui/MagicButton";
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = () => {
        setSubmitted(true)
        console.log('submitted')
    }

    const sendEmail = (e:any) => {
        e.preventDefault();
        if (form.current) {
            // Use form.current as HTMLFormElement
            emailjs
              .sendForm('service_59l5n5q', 'Contact_form', form.current, 'MyrS07nn40pvSfhg5')
              .then(
                (result) => {
                  console.log(result.text);
                  form.current?.reset(); // Reset the form
                },
                (error) => {
                  console.error(error.text);
                }
              );
          } else {
            console.error("Form reference is null.");
          }
    };

    return (
        <section>
            <div className="relative pb-32 max-lg:pb-24 max-md:py-6">
                <div className="container">
                    {successMessage && (
                        <div className="bg-p3 text-white p-3 rounded mb-4 text-center">
                            {successMessage}
                        </div>
                    )}

                    <div className="max-lg:ml-0 ml-20 justify-center items-center">
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div className="flex flex-col md:flex-row md:items-center gap-4 text-left">
                                <div className="flex flex-col w-full md:w-1/2">
                                    <label className="text-sm mb-2 text-black-200 dark:text-white-200 font-medium">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        className="dark:text-white-100 font-medium border text-sm p-3 bg-transparent placeholder-p4/20 border-black/[0.1] dark:border-white/[0.2] focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col w-full md:w-1/2 text-left">
                                    <label className="text-sm mb-2 text-black-200 dark:text-white-200 font-medium">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="dark:text-white-100 font-medium border text-sm p-3 bg-transparent placeholder-p4/20 border-black/[0.1] dark:border-white/[0.2] focus:outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col text-left">
                                <label className="text-sm mb-2 text-black-200 dark:text-white-200 font-medium">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Email"
                                    className="dark:text-white-100 font-medium border text-sm p-3 bg-transparent placeholder-p4/20 border-black/[0.1] dark:border-white/[0.2] focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="flex flex-col text-left">
                                <label className="text-sm mb-2 text-black-200 dark:text-white-200 font-medium">Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Please feel free to let me know anything you want!"
                                    className="dark:text-white-100 font-medium border text-sm p-3 bg-transparent placeholder-p4/20 border-black/[0.1] dark:border-white/[0.2] focus:outline-none"
                                    rows={4}
                                    required
                                />
                            </div>
                            
                            <div className="mt-5 relative">
                                <MagicButton
                                    title={submitted ? "Messege has sent!" : "Send Messege"}
                                    icon={<IoIosSend />}
                                    position="left"
                                    handleClick={handleSubmit}
                                />
                                <button type="submit" onClick={() => handleSubmit()}/>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
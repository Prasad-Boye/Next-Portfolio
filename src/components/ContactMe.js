/* eslint-disable react/display-name */
import React, { useRef, useState, forwardRef } from 'react';
import Lottie from 'react-lottie';
import mailTo from '../../public/images/Animations/SendMail.json'
import mailSent from '../../public/images/Animations/MailSent.json'
import emailjs from '@emailjs/browser';
// import { Mailed } from './icons';

const ContactMe = forwardRef((props, _ref) => {
  const form = useRef();
  const [sentStatus, setSendStatus] = useState('Sent');
  const [showRequiredFields, setShowRequiredFields] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|co)$/i;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mailTo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOption = {
    loop: false,
    autoplay: true,
    animationData: mailSent,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const updateFormValidity = (field, value) => {
    setIsFormValid(
      (field === 'user_name' ? value.trim() !== '' : name.trim() !== '')&&
      (field === 'user_email' ? value.trim() !== '' : email.trim() !== '')&&
      (emailRegex.test(field === 'user_email' ? value.trim() : email.trim())) &&
      (field === 'message' ? value.trim() !== '' : message.trim() !== '')
    );
  };

  const handleInput = (e) => {
    // Handle autofill or any direct input
    const { name, value } = e.target;
    if (name === 'user_name') setName(value);
    else if (name === 'user_email') setEmail(value);
    else if (name === 'message') setMessage(value);
    updateFormValidity(name, value);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setShowRequiredFields(true);
      return;
    }

    setSendStatus('Sending...');

    try {
      const result = await emailjs.sendForm('service_etk2nwe', 'template_h2jww3r', form.current, {
        publicKey: 'wrVhia1gnldljl68H',
      });

      console.log('EmailJS Response:', result);

      setSendStatus('Sent');
    } catch (error) {
      console.error('EmailJS Error:', error);
    }

    setTimeout(() => {
      props.handleClose();
    }, 3500);
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="bg-white flex flex-col md:ml-auto w-11/12 sm:w-2/3 rounded-sm py-6 px-8 justify-center items-center">
      {sentStatus === 'Send' ? 
      <> 
        <div className='flex flex-col items-center justify-center'>
          {/* <Mailed /> */}
          <Lottie 
            options={defaultOptions}
            height={175}
            width={175}
          />
          <p className='font-thin'>Shoot Me A Message !!!</p>
        </div>
        {showRequiredFields && !isFormValid && (
          <div className="text-red-600 mb-2 mt-2">Please fill in all required fields*</div>
        )}
        <div className="items-start w-full mb-2">
            <label className="leading-7 text-sm text-gray-600">
              Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              value={name}
              onInput={handleInput}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
        </div>
        <div className="items-start w-full mb-2">
            <label className="leading-7 text-sm text-gray-600">
              Email ID<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={email}
              onInput={handleInput}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
        </div>
        <div className="items-start w-full mb-2">
            <label className="leading-7 text-sm text-gray-600">
              Message<span className="text-red-600">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onInput={handleInput}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
        </div>
        <button
          className={`bg-dark text-light rounded-md w-40 hover:text-dark border-dark hover:fill-dark hover:bg-light border-2 p-2 mt-3`}
          type="submit"
          value="Send"
        >
          Send
        </button>
      </> : 
      <div className='align-center justify-center text-center font-bold font-sans text-xl'>
        <Lottie 
          options={defaultOption}
          height={450}
          width={450}
        />
        Message {sentStatus}  
      </div>}
    </form>
  );
});

export default ContactMe;

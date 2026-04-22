// import React from 'react'
// import {motion} from 'framer-motion'
// import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'

// const Contact = () => {
//   return (
//     <motion.div
//      initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: 'easeout' }}
//       viewport={{ once: false, amount: 0.2 }}
//       id='contact'
//       className='py-20 bg-dark-200'
//     >
//         <div className='container mx-auto px-6'>
//             <h2 className='text-3xl font-bold text-center mb-4 '>Get In <span className='text-purple'>Touch</span></h2>
//             <p className='text-gray-400 text-center mx-w-2xl mx-auto mb-16'>Have a projects in mind or want to collaborate ? Let's taIk!</p>
//             <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mx-w-5xl mx-auto'>
//                 <div>
//                     <form className='space-y-6 '>
//                         <div>
//                             <label htmlFor="name" className='block text-gray-300'>Your Name</label>
//                             <input type="text" className='w-full border border-dark-400 rounded-lg px-4 py-3 outline-none' />
//                         </div>
//                           <div>
//                             <label htmlFor="email" className='block text-gray-300'>Email Addres</label>
//                             <input type="email" className='w-full border border-dark-400 rounded-lg px-4 py-3 outline-none' />
//                         </div>
//                           <div>
//                             <label htmlFor="message" className='block text-gray-300'>Your Message</label>
//                             <textarea type="text" className='w-full border h-40 border-dark-400 rounded-lg px-4 py-3 outline-none' />
//                         </div>
//                         <button type='submit' className='w-full px-6 py-3 bg-purple font-medium rounded-lg hover:bg-purple-700 transition duration-300'>Send</button>
//                     </form>
//                 </div>
//                 <div className='space-y-8'>
//                     <div className='flex items-start'>
//                         <div className='text-purple text-2xl mr-4'>
//                             <FaMapMarkerAlt />
//                         </div>
//                         <div>
//                             <h3 className='text-lg font-semibold mb-2'>Location</h3>
//                             <p className='text-gray-400'>Lahore , Pakistan </p>
//                         </div>
//                     </div>
//                      <div className='flex items-start'>
//                         <div className='text-purple text-2xl mr-4'>
//                             <FaEnvelope />
//                         </div>
//                         <div>
//                             <h3 className='text-lg font-semibold mb-2'>Email</h3>
//                             <p className='text-gray-400'>alihamzaahmad680@gmail.com</p>
//                         </div>
//                     </div>
//                      <div className='flex items-start'>
//                         <div className='text-purple text-2xl mr-4'>
//                             <FaPhone />
//                         </div>
//                         <div>
//                             <h3 className='text-lg font-semibold mb-2'>Phone</h3>
//                             <p className='text-gray-400'>+92 3211186522</p>
//                         </div>
//                     </div>
//                     <div className='pt-4'>
//                         <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
//                         <div className='flex space-x-4'>
//                             <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
//                                 <FaGithub />
//                             </a>
//                              <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange-400 hover:bg-orange-400 hover:text-white transition duration-300'>
//                                 <FaLinkedin />
//                             </a>
//                              <a href="#" className='w-12 h-12 rounded-full  bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400  transition duration-300 hover:text-white'>
//                                 <FaTwitter />
//                             </a>
//                              <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-pink hover:text-white transition duration-300'>
//                                 <FaDribbble />
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>

//     </motion.div>
//   )
// }

// export default Contact

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaDribbble,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData); // check in console
    alert("Message sent successfully!");

    // reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeout" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* FORM */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300">Your Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full h-40 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple font-medium rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Lahore, Pakistan</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">alihamzaahmad680@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+92 3211186522</p>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/alihamzaahmad680-pixel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/ali-hamza-547b6b38a?utm_source=share&utm_campaign=share_via&utm_content=profile_utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition"
                >
                  <FaTwitter />
                </a>

                <a
                  href="https://dribbble.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink-400 hover:bg-pink-400 hover:text-white transition"
                >
                  <FaDribbble />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

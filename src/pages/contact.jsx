import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const url = import.meta.env.VITE_FORMSPREE_URL;
import axios from 'axios'
function contact() {
//     const [data, setData] = useState({
//         name: '', email: '', subject: '', message: ''
//     })
//     const handleChange = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setData({ ...data, [name]: value })
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const { name, email, subject, message } = data;
//         if (!name || !email || !subject || !message) {
//             toast.error('Please fill all fields');

//             return;
//         }
//         if (!email.includes('@')) {
//             toast.error('Please enter a valid email');
//             return;
//         }
//         if (message.length < 5) {
//             toast.error('Message should be at least 5 characters long');
//             return;
//         }
//         try {
//             const response = await axios.post(url, data);

//             if (response.status === 200) {
//                 toast.success('Message sent successfully');
//             }
//             else {
//                 toast.error('OOPs! something went wrong');
//             }
//         }
//         catch (error) {
//             console.error(error);
//             toast.error('Error sending Message....Please try again');
//         }
//     }
//     return (
//         <motion.div initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, y: 40 }}
//             transition={{ duration: 0.6 }}
//             className='flex  flex-col items-center justify-center px-[8vw]'>
//             <h1 className='heading'>Contact</h1>
//             <div>
//                 <ToastContainer position='top-center' autoClose={2000} />

//                 <div className='flex-col flex gap-10 text-ylw '>
//                     <div className='w-full flex  justify-center gap-10 flex-wrap'>
//                         <input placeholder='Enter Name' onChange={handleChange} value={data.name} name='name' className='w-full rounded-md h-10' type="text" />
//                         <input placeholder='Enter Email' onChange={handleChange} value={data.email} name='email' className='w-full rounded-md  h-10' type="text" />
//                         <input placeholder='Enter Subject' onChange={handleChange} value={data.subject} name='subject' className='w-full h-10 rounded-md' type="text" />
//                     </div>
//                     <textarea placeholder='Enter Message' onChange={handleChange} name='message' value={data.message} className='w-full rounded-md h-40 h-max-40' id=""></textarea>
//                     <motion.button onClick={handleSubmit} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.99 }} className='w-full text-ylw bg-rd h-10 rounded-md'> Send Message</motion.button>
//                 </div>
//                 <div className='grid md:grid-cols-6 grid-cols-3 py-16 gap-10 place-items-center'>
//                     {[
//                         "https://facebook.com/jishnu.kt.33",
//                         "https://twitter.com/jsn18j",
//                         "https://www.linkedin.com/in/jishnu-kt/",
//                         "https://instagram.com/jsn_18",
//                         "https://github.com/jishnukt",
//                         "mailto:jsn18j@gmail.com"
//                     ].map((url, index) => (
//                         <motion.div
//                             key={index}
//                             whileHover={{ scale: 1.2, rotate: 5 }}
//                             whileTap={{ scale: 0.9 }}
//                             transition={{ type: "spring", stiffness: 300 }}
//                         >
//                             <SocialIcon url={url} />
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </motion.div>
//     )
 }

export default contact

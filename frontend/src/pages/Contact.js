import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      const res = await axios.post('http://localhost:8080/api/contact', form);
      setResponse(res.data.message || 'Message sent successfully!');
      setForm({ name: '', email: '', message: '' }); // reset form
    } catch (err) {
      console.error(err);
      if (err.response?.data?.error) {
        setResponse(`Error: ${err.response.data.error}`);
      } else {
        setResponse('Failed to send message. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
        {response && <p>{response}</p>}
      </form>
    </section>
  );
};

export default ContactForm;

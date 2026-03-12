import { useReducer, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { formReducer, buttonConfig } from './contact.machine';
import { Form, Input, Label, Textarea } from "../ui"

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, dispatch] = useReducer(formReducer, 'idle');

  const sendEmail = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    dispatch({ type: 'SUBMIT' });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      dispatch({ type: 'SUCCESS' });
      formRef.current.reset();
      setTimeout(() => dispatch({ type: 'RESET' }), 3000);
      
    } catch (error) {
      console.error('Error enviando el email:', error);
      dispatch({ type: 'ERROR' });
      setTimeout(() => dispatch({ type: 'RESET' }), 3000);
    }
  };

  const currentButton = buttonConfig[status];

  return (
    <Form onSubmit={sendEmail} ref={formRef} className="max-w-xl mx-auto w-full">
      <div className="flex flex-col gap-2">
        <Label htmlFor="user_name">Name</Label>
        <Input type="text" name="user_name" id="user_name" required placeholder="John Doe" />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="user_email">Email</Label>
        <Input type="email" name="user_email" id="user_email" required placeholder="john@example.com" />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea name="message" id="message" rows={5} required placeholder="Hello! I'd like to talk about..." />
      </div>

      <button 
        type="submit" 
        disabled={status === 'loading' || status === 'success'}
        className={`w-full py-3 rounded-lg transition-all duration-300 ${currentButton.className}`}
      >
        {currentButton.text}
      </button>
    </Form>
  );
};
import React from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  return (
    <form className="contact-form-style text-center" id="contact-form" action="#" method="post">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="input-style mb-20">
            <input name="name" placeholder="First Name" type="text" required />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="input-style mb-20">
            <input name="email" placeholder="Your Email" type="email" required />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="input-style mb-20">
            <input name="telephone" placeholder="Your Phone" type="tel" required />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="input-style mb-20">
            <input name="subject" placeholder="Subject" type="text" required />
          </div>
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="textarea-style mb-30">
            <textarea name="message" placeholder="Message" required></textarea>
          </div>
          <Button className="submit submit-auto-width">Send message</Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

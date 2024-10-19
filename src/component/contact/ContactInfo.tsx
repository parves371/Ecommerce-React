import React from 'react';
import Button from './Button';

interface ContactInfoProps {
  title: string;
  address: string;
  phone: string;
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ title, address, phone, email }) => {
  return (
    <div className="col-md-4 mb-4 mb-md-0">
      <h4 className="mb-15 text-brand">{title}</h4>
      <p>
        {address}<br />
        <abbr title="Phone">Phone:</abbr> {phone}<br />
        <abbr title="Email">Email:</abbr> <a href={`mailto:${email}`}>{email}</a><br />
      </p>
      <Button className="btn-outline btn-sm btn-brand-outline font-weight-bold text-brand bg-white text-hover-white mt-20 border-radius-5 btn-shadow-brand hover-up">
        <i className="fi-rs-marker mr-10"></i>View map
      </Button>
    </div>
  );
};

export default ContactInfo;

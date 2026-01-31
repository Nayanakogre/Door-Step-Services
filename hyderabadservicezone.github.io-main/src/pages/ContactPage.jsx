import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaClock, FaCheckCircle, FaUserMd  } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div style={{ padding: '48px 16px', maxWidth: 900, margin: '0 auto' }}>
      <h1>Contact Us</h1>

      {/* Google Map */}
      <div style={{ marginBottom: 24 }}>
        <iframe
          title="Hyderabad Service Zone Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942109.4269285207!2d75.22163035783817!3d15.228687635000588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d9c9cab2771%3A0x4e839c133d43853d!2s5-16%2F46%2C%20Ganesh%20Nagar%2C%20Ameenpur%2C%20Bachupally%2C%20Hyderabad%2C%20Telangana%20500049!5e0!3m2!1sen!2sin!4v1751397894509!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      {/* Service Area */}
      <p>
        Need a quick, reliable repair for your Washing Machine, AC, Microwave, Fridge, Air Cooler, or Dishwasher?
        We're just one call away!
      </p>

      <hr />
      <h2>Our Service Location:</h2>
      <p>
        We provide <strong>doorstep repair and service in  Hyderabad ,AP & Telangana </strong> and nearby areas.
      </p>

      <hr />
      <h2>Contact Information:</h2>
      <p>
        <FaPhoneAlt style={{ color: 'deeppink', marginRight: 8 }} />
        <strong>Phone / WhatsApp:</strong> +91 9542220772
      </p>
      <p>
        <FaEnvelope style={{ color: 'hotpink', marginRight: 8 }} />
        <strong>Email:</strong> hyderabadservicezone@gmail.com
      </p>
      <p>
        <FaGlobe style={{ color: '#00bfff', marginRight: 8 }} />
        <strong>Website:</strong>{' '}
        <a href="https://www. HyderabadServiceZone.com" target="_blank" rel="noopener noreferrer" style={{ color: '#d63384' }}>
          www. HyderabadServiceZone.com
        </a>
      </p>

      <h3>
        <FaClock style={{ color: 'green', marginRight: 8 }} />
        Business Hours:
      </h3>
      <p>
        <FaCheckCircle style={{ color: 'green', marginRight: 8 }} />
        Monday to Sunday – 24*7 hours
      </p>
      <p>
        <FaCheckCircle style={{ color: 'green', marginRight: 8 }} />
        Open on weekends and public holidays
      </p>

      <hr />
      <h2>
      <FaUserMd style={{ color: 'deeppink', marginRight: 8 }} />
        How Can We Help You?
      </h2>
      <p>
        Whether it's a small issue or a major appliance breakdown, our expert technicians are ready to assist you.
        Call or message us on WhatsApp to book a doorstep visit today.
      </p>

      <p style={{ color: 'red', fontSize: '14px', marginTop: '24px' }}>
        <strong>Disclaimer :</strong> We are an independent service provider. We are not affiliated with or authorized
        by any appliance manufacturer or brand, including but not limited to LG, Samsung, Whirlpool, IFB, Bosch, or any
        others. All brand names and logos mentioned are used strictly for identification purposes only.
      </p>
    </div>
  );
};

export default ContactPage;

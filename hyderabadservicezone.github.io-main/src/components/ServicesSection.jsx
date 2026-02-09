import React from 'react';
import './ServicesSection.css';
import { Link } from 'react-router-dom';
import { GiWashingMachine } from 'react-icons/gi';
import { TbAirConditioning } from 'react-icons/tb';
import { BsSnow } from 'react-icons/bs';

const services = [
  {
    id: 1,
    icon: <GiWashingMachine />,
    title: "Washing Machine Repair",
    description: "Expert repair for all brands of washing machines. Same-day doorstep service with genuine parts and professional technicians.",
    route: "/service/washing-machine"
  },
  {
    id: 2,
    icon: <TbAirConditioning />,
    title: "AC Repair & Service",
    description: "Complete AC repair, installation, and maintenance services. Gas filling, cleaning, and all AC related issues solved.",
    route: "/service/ac"
  },
  {
    id: 3,
    icon: <BsSnow />,
    title: "Refrigerator Repair",
    description: "Professional fridge repair services. Cooling issues, compressor problems, and all refrigerator repairs handled.",
    route: "/service/refrigerator"
  },
  /*
  {
    id: 4,
    icon: "🔥",
    title: "Microwave Repair",
    description: "Fast microwave oven repair services. Heating issues, display problems, and component replacement services.",
    route: "/service/microwave"
  },
  {
    id: 5,
    icon: "🍽️",
    title: "Dishwasher Service",
    description: "Complete dishwasher repair and maintenance. Water inlet, drainage, and cleaning cycle issues resolved.",
    route: "/service/dishwasher"
  },
  {
    id: 6,
    icon: "💨",
    title: "Air Cooler Service",
    description: "Air cooler repair and maintenance services. Pump issues, cooling problems, and general servicing.",
    route: "/service/air-cooler"
  }
  */
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-floating-box">
        <h2 className="services-title">Our Services</h2>
        <div className="services-divider"></div>

        <div className="services-list">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.route}
              className="service-item"
              tabIndex={0}
              aria-label={service.title}
            >
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-name">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

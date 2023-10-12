import React from 'react';
import { services } from '../constants';
import { ServiceCard } from '../components';

function Services() {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard
          key={service.label}
          imgURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
        />
      ))}
    </section>
  );
}

export default Services;

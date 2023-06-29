"use client"

import { useState } from 'react';
import {motion} from "framer-motion";

export default function WhatWeDoList() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Service 1',
      description: 'Description of service 1',
    },
    {
      id: 2,
      title: 'Service 2',
      description: 'Description of service 2',
    },
    // Add more services as needed
  ];

  const handleServiceClick = (serviceId:any) => {
    if (selectedService === serviceId) {
      // If the clicked service is already selected, close it
      setSelectedService(null);
    } else {
      // Close the currently selected service (if any) and open the clicked service
      setSelectedService(serviceId);
    }
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i:any) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {type: "spring", duration: 0.5, bounce: 0 },
          opacity: {duration: 0.01 }
        }
      };
    }
  };

  return (
    <div className='flex flex-col space-y-[50px]' >
      {services.map((service) => (
        <div 
          key={service.id}
        >
          <div className="flex items-center justify-between cursor-pointer" onClick={() => handleServiceClick(service.id)}>
            <div className="flex items-center">
              <h3 className="text-lg font-medium">{service.title}</h3>
            </div>
        
              {selectedService === service.id ? (
                <div className='w-4 h-4'>
                    <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.line
                    x1="0"
                    y1="0"
                    x2="16"
                    y2="16"
                    stroke="#8870BB"
                    strokeWidth={3}
                    variants={draw}
                    custom={2}

                  />
                  <motion.line
                    x1="16"
                    y1="0"
                    x2="0"
                    y2="16"
                    stroke="#8870BB"
                    strokeWidth={3}
                    variants={draw}
                    custom={2}

                  />
                  </motion.svg>
              </div>
            ) : (
              <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              initial="hidden"
              animate="visible"

            >
              <motion.line
              x1="0"
              y1="8"
              x2="16"
              y2="8"
              stroke="#8870BB"
              strokeWidth={3}
              variants={draw}
            />
            <motion.line
              x1="8"
              y1="0"
              x2="8"
              y2="16"
              stroke="#8870BB"
              strokeWidth={3}
              variants={draw}
            />
            </motion.svg>
            )}

          </div>
            <div className={ `mt-2 rounded transition-all duration-500 ${selectedService === service.id ? "h-auto" : "h-0 overflow-hidden"}`}>
              <p>{service.description}</p>
            </div>

          <div className={`h-[2px] bg-[#8870BB] mt-2 transition-all duration-500 ${selectedService === service.id ? "w-[80%]" : "w-[5%]"}`}/> 
        </div>
      ))}
    </div>
  );
};



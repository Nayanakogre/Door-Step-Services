import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Which appliances do you repair in Bangalore?",
      answer: "We repair all major home appliances including washing machines, air conditioners, refrigerators, microwaves, dishwashers, and air coolers of all leading brands in Bangalore."
    },
    {
      id: 2,
      question: "Do you provide same-day service?",
      answer: "Yes! We provide same-day doorstep service across Bangalore depending on technician availability."
    },
    {
      id: 3,
      question: "Are your technicians verified?",
      answer: "Absolutely. All our technicians are background-verified, trained, and experienced in handling a wide range of appliance issues."
    },
    {
      id: 4,
      question: "What are the service charges?",
      answer: "We charge a basic inspection fee of ₹199/-, which is adjusted in the final bill if you proceed with the repair. Final charges vary depending on the appliance and issue."
    },
    {
      id: 5,
      question: "Do you use genuine spare parts?",
      answer: "Yes. We use genuine or brand-compatible spare parts based on availability and your preference."
    },
    {
      id: 6,
      question: "How can I book a service?",
      answer: "You can call us directly at 9542220772 to schedule a service or get more information. WhatsApp support is also available for quick booking."
    },
    {
      id: 7,
      question: "What payment methods do you accept?",
      answer: "We accept cash, UPI, and bank transfers after the service is completed."
    },
    {
      id: 8,
      question: "Do you provide warranty on repairs?",
      answer: "Yes, we offer a limited warranty on certain repairs and spare parts. Please confirm warranty details with our technician during the visit."
    },
    {
      id: 9,
      question: "Which areas in Bangalore do you cover?",
      answer: "We provide service across all major areas including Whitefield, BTM Layout, Koramangala, Marathahalli, Electronic City, and surrounding neighborhoods."
    }
  ];

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      component="section"
      id="faq"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(135deg, rgb(43, 62, 205) 0%, #030c50 50%, #223fc2 100%)',
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
        
        {/* Section Header */}
        <Box textAlign="center" mb={8} color="#fff">
          <Typography variant="h4" fontWeight={800} gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              background: 'linear-gradient(90deg, #60a5fa, #3b82f6)',
              mx: 'auto',
              borderRadius: 2,
              mb: 3
            }}
          />
          <Typography variant="subtitle1" color="rgba(255,255,255,0.85)" maxWidth={650} mx="auto">
            Here are answers to the most common questions about our appliance repair services in Bangalore.
          </Typography>
        </Box>

        {/* FAQ Accordions */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
              sx={{
                backgroundColor: '#fff',        // white card
                color: '#111827',               // dark text
                borderRadius: 3,
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                '&:hover': { boxShadow: '0 12px 40px rgba(0,0,0,0.12)' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#3b82f6' }} />}
                sx={{ px: 3, py: 2 }}
              >
                <Typography fontWeight={600}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, py: 2 }}>
                <Typography variant="body2" sx={{ lineHeight: 1.6, opacity: 0.9 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQSection;

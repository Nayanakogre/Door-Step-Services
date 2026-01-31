import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Divider,
  useTheme
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Add as AddIcon } from '@mui/icons-material';

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);
  const theme = useTheme();

  const faqs = [
    {
      id: 1,
      question: "What types of appliances do you repair?",
      answer: "We repair all major home appliances including washing machines, air conditioners, refrigerators, microwaves, dishwashers, and air coolers of all major brands."
    },
    {
      id: 2,
      question: "Do you provide same-day service?",
      answer: "Yes, we provide same-day doorstep service across all areas in Hyderabad ,AP & Telangana, depending on technician availability."
    },
    {
      id: 3,
      question: "Are your technicians verified?",
      answer: "Absolutely. All our technicians are background-verified, trained, and experienced in handling a wide range of appliance issues."
    },
    {
      id: 4,
      question: "What are your service charges?",
      answer: "We charge a basic inspection/service fee of ₹199/-, which is adjusted in the final bill if you proceed with the repair. Charges vary depending on the appliance and issue."
    },
    {
      id: 5,
      question: "Do you use genuine spare parts?",
      answer: "Yes. We use genuine or brand-compatible spare parts based on availability and customer preference."
    },
    {
      id: 6,
      question: "How can I book a service?",
      answer: "You can call us directly at 9542220772 to schedule a service or get more information. You can also contact us via WhatsApp."
    },
    {
      id: 7,
      question: "What payment methods do you accept?",
      answer: "We accept cash, UPI, and bank transfers after the service is completed."
    },
    {
      id: 8,
      question: "Do you provide warranty on repairs?",
      answer: "Yes, we offer a limited warranty on certain repairs and spare parts. Please ask our technician for warranty details during the visit."
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
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.paper,
        position: 'relative'
      }}
    >
      <Box 
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 3, sm: 4, md: 6 },
        }}
      >
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography 
            variant="h3" 
            component="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 2,
              color: theme.palette.text.primary
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Divider 
            sx={{ 
              width: '80px', 
              height: '4px', 
              backgroundColor: theme.palette.primary.main, 
              mx: 'auto',
              borderRadius: '2px'
            }} 
          />
        </Box>

        {/* FAQ Accordions */}
        <Box sx={{ 
          maxWidth: '800px', 
          mx: 'auto',
          '& .MuiAccordion-root': {
            boxShadow: 'none',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: '8px !important',
            mb: 2,
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            '&:before': {
              display: 'none'
            },
            '&:hover': {
              borderColor: theme.palette.primary.main,
              boxShadow: theme.shadows[2]
            }
          },
          '& .MuiAccordionSummary-root': {
            backgroundColor: theme.palette.background.default,
            '&:hover': {
              backgroundColor: theme.palette.action.hover
            }
          },
          '& .Mui-expanded': {
            backgroundColor: `${theme.palette.primary.light}08`,
            borderColor: theme.palette.primary.main
          }
        }}>
          {faqs.map((faq) => (
            <Accordion 
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
              disableGutters
            >
              <AccordionSummary
                expandIcon={
                  expanded === faq.id ? (
                    <ExpandMoreIcon color="primary" />
                  ) : (
                    <AddIcon />
                  )
                }
                sx={{
                  py: { xs: 1.5, md: 2 },
                  px: { xs: 2, md: 3 }
                }}
              >
                <Typography 
                  variant="subtitle1" 
                  component="h3"
                  sx={{ 
                    fontWeight: 600,
                    color: expanded === faq.id ? 
                      theme.palette.primary.main : 
                      theme.palette.text.primary
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ 
                  py: { xs: 1, md: 2 },
                  px: { xs: 2, md: 3 },
                  backgroundColor: theme.palette.background.paper
                }}
              >
                <Typography 
                  variant="body1"
                  sx={{ 
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6
                  }}
                >
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
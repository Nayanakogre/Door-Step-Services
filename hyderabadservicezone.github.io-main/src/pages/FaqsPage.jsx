import React from 'react';
import { 
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  Card,
  CardContent
} from '@mui/material';
import {
  ExpandMore,
  CheckCircle,
  Phone,
  Email,
  Build,
  VerifiedUser,
  Cancel
} from '@mui/icons-material';

const FaqsPage = () => {
  const faqs = [
    {
      question: "Do you offer doorstep service in Hyderabad?",
      answer: "Yes, we provide doorstep appliance repair services across Hyderabad ,AP & Telangana and nearby areas. Our technician will visit your home to diagnose and fix the issue."
    },
    {
      question: "What appliances do you repair?",
      answer: (
        <>
          We repair all major home appliances including:
          <List dense sx={{ pl: 2, mt: 1 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <CheckCircle color="success" fontSize="small" />
              </ListItemIcon>
              Washing Machines (Front Load / Top Load / Semi & Fully Automatic)
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <CheckCircle color="success" fontSize="small" />
              </ListItemIcon>
              Refrigerators
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <CheckCircle color="success" fontSize="small" />
              </ListItemIcon>
              Air Conditioners (Split / Window)
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <CheckCircle color="success" fontSize="small" />
              </ListItemIcon>
              Microwave Ovens
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <CheckCircle color="success" fontSize="small" />
              </ListItemIcon>
              Dishwashers
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <CheckCircle color="success" fontSize="small" />
              </ListItemIcon>
              Air Coolers
            </ListItem>
          </List>
        </>
      )
    },
    {
      question: "Are you an authorized service center?",
      answer: "No, we are an independent service provider. Hyderabad Service Zone is not affiliated with or authorized by any specific brand. Brand names are used only for identification."
    },
    {
      question: "Do you use original spare parts?",
      answer: "We use high-quality compatible spare parts. All parts are tested and reliable. If original parts are available, we will inform you of the option and price difference."
    },
    {
      question: "How much do you charge for inspection or service?",
      answer: "Our inspection charges start from ₹199 depending on the appliance. Full pricing details are available on our Pricing / Service Charges page."
    },
    {
      question: "Is there a warranty on repairs?",
      answer: "Yes, we offer a 30-day warranty on labor and up to 3-6 months on spare parts, depending on the item replaced. Terms apply."
    },
    {
      question: "What if the problem comes back after repair?",
      answer: "If the same issue reoccurs within the warranty period, we'll revisit and resolve it at no additional labor charge."
    },
    {
      question: "How do I book a service?",
      answer: (
        <>
          You can:
          <List dense sx={{ pl: 2, mt: 1 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <Phone color="primary" fontSize="small" />
              </ListItemIcon>
              Call us at +91 9542220772
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <Email color="primary" fontSize="small" />
              </ListItemIcon>
              Email us at hyderabadservicezone@gmail.com
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <Build color="primary" fontSize="small" />
              </ListItemIcon>
              Use the contact form on our Contact Us page
            </ListItem>
          </List>
        </>
      )
    },
    {
      question: "Do you offer emergency or same-day service?",
      answer: "We try to provide same-day service based on technician availability. For urgent issues, please call us directly for quicker support."
    },
    {
      question: "Can I cancel or reschedule a booking?",
      answer: (
        <>
          <Box display="flex" alignItems="center" mb={1}>
            <Cancel color="info" fontSize="small" sx={{ mr: 1 }} />
            <Typography>Yes, just contact us at least 2 hours before the scheduled time to cancel or reschedule your appointment.</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <VerifiedUser color="info" fontSize="small" sx={{ mr: 1 }} />
            <Typography>No cancellation charges if informed on time.</Typography>
          </Box>
        </>
      )
    }
  ];

  return (
    <Box sx={{ 
      padding: { xs: '24px 16px', md: '48px 32px' },
      maxWidth: 900,
      margin: '0 auto'
    }}>
      {/* Title Section */}
      <Typography variant="h4" component="h1" gutterBottom sx={{ 
        fontWeight: 'bold',
        mb: 3,
        color: 'primary.main'
      }}>
        Frequently Asked Questions
      </Typography>

      {/* Intro Text */}
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Find answers to common questions about <strong> Hyderabad Service Zone</strong> appliance repair services.
        Can't find what you're looking for? Contact us directly.
      </Typography>

      {/* FAQ Accordions */}
      <Box>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 1, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ 
                backgroundColor: '#f5f5f5',
                '&:hover': { backgroundColor: '#eeeeee' }
              }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#fafafa' }}>
              <Typography component="div">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Contact Prompt */}
      <Card sx={{ mt: 4, backgroundColor: '#e3f2fd' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Still have questions?
          </Typography>
          <Typography>
            Contact us at <strong>hyderabadservicezone@gmail.com</strong> or call <strong>+91 9542220772</strong>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FaqsPage;
import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider
} from '@mui/material';
import {
  ExpandMore,
  CheckCircle,
  Phone,
  Email,
  Build,
  VerifiedUser,
  HelpOutline,
  SupportAgent,
  Cancel
} from '@mui/icons-material';

const FaqsPage = () => {
  const theme = {
    primary: "#0f172a", // Your signature Deep Slate
    accent: "#2563eb",  // Trust Blue
    bg: "#f8fafc",
    card: "#ffffff",
    border: "#e2e8f0",
    textMain: "#1e293b",
    textMuted: "#64748b",
    success: "#059669"
  };

  const faqs = [
    {
      question: "Do you offer doorstep service in Bengaluru?",
      answer: "Yes, we provide doorstep appliance repair services across Bengaluru city and nearby localities. Our technician will visit your home to diagnose and fix the issue promptly."
    },
    {
      question: "What appliances do you repair?",
      answer: (
        <Box>
          <Typography variant="body2" sx={{ mb: 1.5, fontWeight: 600 }}>We repair all major home appliances:</Typography>
          <List dense sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 0.5 }}>
            {["Washing Machines", "Refrigerators", "Air Conditioners", "Microwave Ovens", "Dishwashers", "Air Coolers"].map((item) => (
              <ListItem key={item} sx={{ p: 0 }}>
                <ListItemIcon sx={{ minWidth: 28 }}><CheckCircle sx={{ color: theme.success, fontSize: 18 }} /></ListItemIcon>
                <Typography variant="body2">{item}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      )
    },
    {
      question: "Are you an authorized service center?",
      answer: "No. Bengaluru Repair Services is an independent provider. We are not affiliated with or authorized by any specific brand. Brand names are used only for identification purposes."
    },
    {
      question: "How much do you charge for inspection?",
      answer: "Our inspection charges start from ₹199. This covers the technician's travel and a professional diagnosis. Final repair costs are quoted based on the specific issue found."
    },
    {
      question: "Is there a warranty on repairs?",
      answer: "Yes. We offer a 30-day warranty on labor and 3–6 months on spare parts (depending on the part replaced). If the same issue reoccurs within this period, we fix it for free."
    },
    {
      question: "Can I cancel or reschedule a booking?",
      answer: (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Cancel sx={{ color: '#ef4444', fontSize: 18 }} />
            <Typography variant="body2">Inform us 2 hours before the scheduled time.</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <VerifiedUser sx={{ color: theme.success, fontSize: 18 }} />
            <Typography variant="body2">No cancellation charges for timely notice.</Typography>
          </Box>
        </Box>
      )
    }
  ];

  return (
    <Box sx={{ backgroundColor: theme.bg, minHeight: '100vh', py: 8, px: 2 }}>
      <Box sx={{ maxWidth: 650, margin: '0 auto' }}>
        
        {/* HEADER SECTION */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: 1, 
            px: 2, 
            py: 0.5, 
            borderRadius: '100px', 
            backgroundColor: '#dbeafe', 
            color: theme.accent,
            mb: 2
          }}>
            <HelpOutline sx={{ fontSize: 14 }} />
            <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>Help Center</Typography>
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 800, color: theme.primary, mb: 1, letterSpacing: '-0.02em' }}>
            FAQs
          </Typography>
          <Typography sx={{ color: theme.textMuted }}>
            Quick answers for Bengaluru Repair Services customers.
          </Typography>
        </Box>

        {/* FAQ LIST (UX: Individual Card Flow) */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((faq, index) => (
            <Accordion 
              key={index} 
              elevation={0}
              disableGutters
              sx={{ 
                borderRadius: '20px !important', 
                border: `1px solid ${theme.border}`,
                overflow: 'hidden',
                '&:before': { display: 'none' },
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
              }}
            >
              <AccordionSummary 
                expandIcon={<ExpandMore sx={{ color: theme.accent }} />}
                sx={{ 
                  px: 3, 
                  py: 1, 
                  backgroundColor: theme.card,
                  '& .MuiTypography-root': { fontWeight: 700, color: theme.primary }
                }}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, pt: 0, backgroundColor: theme.card }}>
                <Divider sx={{ mb: 2, opacity: 0.5 }} />
                <Typography variant="body2" component="div" sx={{ color: theme.textMuted, lineHeight: 1.7 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* SUPPORT CTA (UX: Deep Slate Gradient) */}
        <Box sx={{ 
          mt: 6, 
          borderRadius: '24px', 
          background: `linear-gradient(135deg, ${theme.primary} 0%, #1e293b 100%)`, 
          color: 'white',
          p: 4,
          textAlign: 'center'
        }}>
          <SupportAgent sx={{ fontSize: 48, color: theme.accent, mb: 2 }} />
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Still have questions?</Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, mb: 3 }}>
            Our team is available 24/7 for doorstep support in Bengaluru.
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone sx={{ fontSize: 18, color: theme.accent }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>+91 95422 20772</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Email sx={{ fontSize: 18, color: theme.accent }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>bengalururepairservices@gmail.com</Typography>
            </Box>
          </Box>
        </Box>

        {/* DISCLAIMER */}
        <Typography variant="caption" sx={{ 
          display: 'block', 
          textAlign: 'center', 
          mt: 4, 
          color: theme.textMuted,
          lineHeight: 1.5
        }}>
          <strong>Note:</strong> Bengaluru Repair Services is an independent provider. 
          Brand names are used for reference only.
        </Typography>
      </Box>
    </Box>
  );
};

export default FaqsPage;

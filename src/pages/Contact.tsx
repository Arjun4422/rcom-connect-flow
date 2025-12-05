import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    industry: "",
    message: "",
    inquiryType: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    const emailBody = `
New Contact Form Submission:
--------------------------------
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company}
Job Title: ${formData.jobTitle || 'Not provided'}
Industry: ${formData.industry || 'Not provided'}
Inquiry Type: ${formData.inquiryType || 'Not provided'}
--------------------------------
Message:
${formData.message}
    `.trim();

    const submissionData = {
      ...formData,
      emailBody: emailBody,
    };

    try {
      const res = await fetch("https://test3.rcom-gateway.com/RCOMENDPOINTAPI/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("Message sent successfully ✅");
      toast({
        title: "Thank you for your inquiry!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        jobTitle: "",
        industry: "",
        message: "",
        inquiryType: ""
      });
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again ❌");
      toast({
        title: "Oops, something went wrong",
        description: "Please try again or contact us directly by email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@data-elektronik.de",
      subDetails: "gateway-support@data-elektronik.de"
    },
    {
      icon: Phone,
      title: "Call Us", 
      details: "+49 621 41080",
      subDetails: "Mon-Fri, 9AM-6PM UTC"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Edisonstraße 10-12",
      subDetails: "68309 Mannheim, Germany"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 h-[40vh] text-white flex items-center">
        <div className="container mx-auto px-6">
          <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}/>
        </div>
          <div className="max-w-4xl mx-auto text-center">
            
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-glow border-primary/30">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your 
              <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent"> Operations?</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Contact our team to schedule a personalized demo or discuss how RCOM Gateway 
              can solve your specific IoT integration challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-background border-border/50 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MessageSquare className="w-6 h-6 text-primary mr-3" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job Title</Label>
                        <Input
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Select
                          value={formData.industry}
                          onValueChange={(value) => handleInputChange("industry", value)}
                        >
                          <SelectTrigger id="industry">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="logistics">Logistics & Supply Chain</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => handleInputChange("inquiryType", value)}
                        >
                          <SelectTrigger id="inquiryType">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="demo">Request Demo</SelectItem>
                            <SelectItem value="pricing">Pricing Information</SelectItem>
                            <SelectItem value="technical">Technical Questions</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        placeholder="Tell us about your specific needs, current challenges, or questions about RCOM Gateway..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                      />
                    </div>

                    {status && (
                      <p className="text-sm text-muted-foreground">
                        {status}
                      </p>
                    )}

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={loading}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            {/* ...everything below here can stay exactly as you already had it... */}

            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-gradient-card border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-muted-foreground text-sm">{info.details}</p>
                          <p className="text-muted-foreground text-xs mt-1">{info.subDetails}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Google Map Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg border border-border/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.8481005849358!2d8.503063876785898!3d49.51279735443141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797ce68c0ff153f%3A0x6bf7ae3f655d5231!2sDATA%20ELEKTRONIK!5e1!3m2!1sen!2sin!4v1764915962643!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DATA ELEKTRONIK GmbH Location"
                ></iframe>
              </div>

              {/* Quick Actions, Book a Demo, Response Time, Other Ways to Connect */}
              {/* ...your existing JSX blocks unchanged... */}
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods section unchanged */}
      {/* ... */}
    </div>
  );
};

export default Contact;

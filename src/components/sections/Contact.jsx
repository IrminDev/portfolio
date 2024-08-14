import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  resize: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const Contact = () => {
  const [form, setForm] = useState({
    from_email: "",
    from_name: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.from_email || !form.from_name || !form.subject || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }

    emailjs
      .sendForm(
        "service_4xrsm1c",
        "template_tgx0t2m",
        "#emailForm",
        "Z9YmT7gNbLNTSY1qj"
      )
      .then((result) => {
        toast.success("Message Sent Successfully");
        setForm({
          from_email: "",
          from_name: "",
          subject: "",
          message: "",
        });
      }).catch((err) => {
        toast.error("Failed to send message");
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <Container id="Contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm id='emailForm' onSubmit={handleSubmit}>
          <ContactTitle>Email Me</ContactTitle>
          <ContactInput onChange={handleChange} value={form.from_email} placeholder="Your Email" name="from_email" />
          <ContactInput onChange={handleChange} value={form.from_name} placeholder="Your Name" name="from_name" />
          <ContactInput onChange={handleChange} value={form.subject} placeholder="Subject" name="subject" />
          <ContactInputMessage onChange={handleChange} value={form.message} placeholder="Message" name="message" rows={4} />
          <ContactButton value="Send" type="submit" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
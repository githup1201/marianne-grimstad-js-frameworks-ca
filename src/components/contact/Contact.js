import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorMessage from "./ErrorMessage";


const schema = yup.object().shape({
	firstName: yup.string().required("First name is required")
        .min(2, "Names must have at least 2 characters")
        .max(50, "Names can't be longer than 50 characters"),
    lastName: yup.string().required("Last name is required")
        .min(2, "Names must have at least 2 characters")
        .max(50, "Names can't be longer than 50 characters"),
	email: yup.string()
        .email("Please enter a valid email")
		.required("Email is required"),
    message: yup.string().required("Message is required")
        .min(10, "Messages must have at least 10 characters")
        .max(100, "Messages can't be longer than 50 characters")
});

function Contact() {
    const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});
    
    const HideStyle = {
         display: 'none',
     }; 
    
    const ShowStyle = {
         display: 'block',
     };
    
    function onSubmit(data) {
        console.log("data", data);
      
        var success = document.getElementById("success");
        success.style={ShowStyle};
      }
           
    return ( 
      <Form onSubmit={handleSubmit(onSubmit)}>
               
        <div id="success" style={HideStyle}>Message is sent successfully!</div>
       
        <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control name="firstName" placeholder="Enter your first name"  ref={register}/>
            {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
        </Form.Group>
                                                                         
        <Form.Group>
            <Form.Label>Last name</Form.Label>
            <Form.Control name="lastName" placeholder="Enter your last name" ref={register} />
                {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
        </Form.Group>
             
        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" placeholder="Enter your email" ref={register} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Form.Group>

        <Form.Group>
            <Form.Label>Message</Form.Label>
            <textarea className="form-control" name="message" rows="5" placeholder="Write us a message" ref={register}></textarea>
                {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
        </Form.Group>
                                                                                                                                                                                                                                                                                                                             
        <Button type="submit">Submit</Button>
    </Form>
);
   
}



export default Contact;
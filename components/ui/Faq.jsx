import React from 'react'
import { Accordion } from 'react-bootstrap'

export default function Faq() {
    return (
        <div className='py-5 my-5 faqContainer'>
            <h2>FAQ</h2>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    Possible to integrate existing DMS or CRM to Innovazia's digital showroom platform?</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Do you provide dealership CRM as well?</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion></div>
    )
}

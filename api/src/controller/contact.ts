import {  RequestHandler} from "express";
import { Contact } from "../models/contact";

export const createContact: RequestHandler = async (req, res, next) => {
    const contact = await Contact.create({...req.body});
    return res.status(200).send({contact});
}

export const getAllContacts: RequestHandler = async (_, res, next) => {
    await Contact.findAll()
    .then((contacts) => {
        return res.status(200).send(contacts);
    })
    .catch((err) => {
        return res.status(500).send(err)
    });

}

export const getContactById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const documentNumber = Number(id);

    const contact: Contact|null = await Contact.findByPk(documentNumber);

    return res.status(200).send(contact);
}

export const updateContact: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const documentNumber = Number(id);
   
    await Contact.update({...req.body}, {where: {documentNumber}})

    const updatedContact: Contact|null = await Contact.findByPk(documentNumber);
    
    return res.status(201).send(updatedContact);
}

export const deleteContact: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const documentNumber = Number(id);

    const deletedContact: Contact|null = await Contact.findByPk(documentNumber);


    await Contact.destroy({where: {documentNumber}});

    return res.status(200).send({message: "Succesfully eliminated contact", data: deletedContact})
}
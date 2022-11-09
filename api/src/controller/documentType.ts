import { RequestHandler } from "express";
import { DocumentType } from "../models/documentType";

export const getAllDocuments: RequestHandler = async  (_, res, next) => {
    await DocumentType.findAll()
    .then((documentTypes) => {
        return res.status(200).send(documentTypes);
    })
    .catch((err) => {
        return res.status(500).send(err)
    });
}
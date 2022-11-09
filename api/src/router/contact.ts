import { Router } from "express";

import {
    createContact,
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact
} from "../controller/contact"

const router = Router();

router.post("/", createContact)

router.get("/", getAllContacts)

router.get("/:id", getContactById)

router.put("/:id", updateContact)

router.delete("/:id", deleteContact)

export default router
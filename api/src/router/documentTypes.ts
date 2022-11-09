import { Router } from "express";
import { 
    getAllDocuments 
} from "../controller/documentType";

const router = Router();

router.get("/", getAllDocuments);

export default router
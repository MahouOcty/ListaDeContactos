import http from "@/http-common";

class DocumentTypeServices {
    getAll() {
        return http.get("/document")
    }
}

export default new DocumentTypeServices()
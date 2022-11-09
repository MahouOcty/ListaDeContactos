import http from "@/http-common";

class ContactDataService {
    getAll() {
        return http.get("/contact")
    }

    get(id: string) {
        return http.get(`/contact/${id}`)
    }

    create(data: any) {
        return http.post("/contact", data)
    }

    update(id: string, data: any) {
        return http.put(`/contact/${id}`, data)
    }

    delete(id: string) {
        return http.delete(`/contact/${id}`)
    }
}

export default new ContactDataService();
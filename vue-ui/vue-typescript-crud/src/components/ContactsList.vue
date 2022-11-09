<template>
<div>
    <div class="list row">
        <div class="col-md-6">
        <h4>Contacts List</h4>
        <ul class="list-group">
            <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(Contact, index) in contacts"
            :key="index"
            @click="setActiveContact(Contact, index)"
            >
            {{ Contact.name + " "+ Contact.lastname }} 
            </li>
        </ul>
        </div>
    </div>
    <div class="col-md-6">
        <div v-if="currentContact.documentNumber">
        <h4>{{ currentContact.name + " "+ currentContact.lastname }}</h4>
        <div>
            <label><strong>No. Documento:</strong></label> {{ currentContact.documentNumber }}
        </div>
        <div>
            <label><strong>Tipo de documento:</strong></label> {{ currentContact.documentType}}
        </div>
        <div>
            <label><strong>Fecha de Nacimiento</strong></label>
            {{ currentContact.birthday}}
        </div>
        <div>
            <label><strong>Celular</strong></label>
            {{ currentContact.cellphone}}
        </div>
        <div>
            <label><strong>Telefono Fijo</strong></label>
            {{ currentContact.phone}}
        </div>
        <div>
            <label><strong>Dirección</strong></label>
            {{ currentContact.address}}
        </div>
        <a
            class="badge badge-warning"
            :href="'/tutorials/' + currentContact.documentNumber"
        >
            Edit
        </a>
        </div>
        <div v-else>
        <br />
        <p>Please click on a Contact...</p>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContactsDataService from "@/services/ContactsDataService";
import DocumentTypeServices from "@/services/DocumentTypeServices";
import DocumentType from "@/types/documentType";
import Contact from "@/types/contact";

@Component
export default class ContactsList extends Vue {
   contacts: Contact[] = [];
   currentContact = {} as Contact;
   currentIndex: number = -1;
   documentTypes: DocumentType[] =[];

  retrieveContacts() {
    ContactsDataService.getAll()
      .then((response) => {
        this.contacts = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  retrieveDocumentTypes() {
    DocumentTypeServices.getAll()
     .then((response) => {
        this.documentTypes = response.data;
        console.log(response.data)
     })
     .catch((e) => {
        console.log(e);
     })
  }

  refreshList() {
    this.retrieveContacts();
    this.currentContact = {} as Contact;
    this.currentIndex = -1;
  }

  setActiveContact(contact: Contact, index: number) {
    this.currentContact = contact;
    this.currentIndex = index;
  }


  mounted() {
    this.retrieveContacts();
    this.retrieveDocumentTypes();
  }
}
</script>
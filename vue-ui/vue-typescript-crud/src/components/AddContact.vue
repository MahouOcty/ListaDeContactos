<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="documentnumber">Numero de Documento</label>
          <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="contact.documentNumber"
            name="title"
          />
          <label for="documenttype">Tipo de Documento</label>
          <b-form-select v-model="contact.documentType" :options="options"></b-form-select> 
        </div>

        <div class="form-group">
          <label for="name">Nombres</label>
          <input
            class="form-control"
            id="description"
            required
            v-model="contact.name"
            name="description"
          />
          <label for="lastname">Apellidos</label>
          <input
            class="form-control"
            id="description"
            required
            v-model="contact.lastname"
            name="description"
          />
        </div>

        <div class="form-group">
          <label for="birthday">Fecha de Nacimiento</label>
          <b-form-datepicker id="example-datepicker" v-model="contact.birthday" class="mb-2"></b-form-datepicker>
          <label for="cellphone">Numero de Celular</label>
          <input
            class="form-control"
            id="description"
            required
            v-model="contact.cellphone"
            name="description"
          />
          <label for="phone">Telefono fijo</label>
          <input
            class="form-control"
            id="description"
            required
            v-model="contact.phone"
            name="description"
          />
        </div>

        <div class="form-group">
          
          <label for="address">Dirección</label>
          <input
            class="form-control"
            id="description"
            required
            v-model="contact.address"
            name="description"
          />
        </div>
  
        <button @click="saveContact" class="btn btn-success">Submit</button>
      </div>
  
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newContact">Add</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import ContactDataService from "@/services/ContactsDataService";
  import Contact from "@/types/contact";

  

  @Component
  export default class AddContact extends Vue {

    
    contact: Contact = {
      documentNumber: 0,
      documentType: 1,
      name: "",
      lastname: "",
      birthday: new Date(),
      cellphone: 0,
      phone: undefined,
      address: ""
    };
  
   submitted: boolean = false;

    selected: number | null = null;
    
    options = [
      { value: null, text: "Seleccione el tipo de documento"},
      { value: 1, text: "Cedula de Ciudadanía"},
      { value: 2, text: "Tarjeta de Identidad"},
      { value: 3, text: "Cedula de Extrangería"},
      {value: 4, text: "Pasaporte"}
    ]
    saveContact() {
      let data = {
        documentNumber: this.contact.documentNumber,
        documentType: this.contact.documentType,
        name: this.contact.name,
        lastname: this.contact.lastname,
        birthday: this.contact.birthday,
        cellphone: this.contact.cellphone,
        phone: this.contact.phone,
        address: this.contact.address
      };

      ContactDataService.create(data)
        .then((response) => {
          this.contact.documentNumber = response.data.documentNumber;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    }
  
    newContact() {
      this.submitted = false;
      this.contact = {} as Contact;
    }
  }
  </script>
  
  <style scoped>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>
  
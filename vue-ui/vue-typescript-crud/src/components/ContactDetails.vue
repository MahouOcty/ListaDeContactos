<template>
    <div v-if="currentContact.documentNumber" class="edit-form">
      <h4>Contact</h4>
      <form>
        <div class="form-group">
          <label for="title">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="currentContact.name"
          />
        </div>
        <div class="form-group">
          <label for="description">Apellido</label>
          <input
            type="text"
            class="form-control"
            id="lastname"
            v-model="currentContact.lastname"
          />
        </div>
        <div class="form-group">
          <label for="description">Celular</label>
          <input
            type="text"
            class="form-control"
            id="cellphone"
            v-model="currentContact.cellphone"
          />
        </div>
        <div class="form-group">
          <label for="description">Telefono Fijo</label>
          <input
            type="text"
            class="form-control"
            id="phone"
            v-model="currentContact.phone"
          />
        </div>
        <div class="form-group">
          <label for="description">Dirección</label>
          <input
            type="text"
            class="form-control"
            id="cellphone"
            v-model="currentContact.address"
          />
        </div>
        
      </form>
  
      <button class="badge badge-danger mr-2" @click="deleteContact">
        Delete
      </button>
  
      <button type="submit" class="badge badge-success" @click="updateContact">
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Please click on a Contact...</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContactDataService from "@/services/ContactsDataService";
import Contact from "@/types/contact";

@Component
export default class ContactDetails extends Vue {
   currentContact = {} as Contact;
   message: string = "";

  getContact(id: string) {
    ContactDataService.get(id)
      .then((response) => {
        this.currentContact = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }


  updateContact() {
    ContactDataService.update(this.currentContact.documentNumber.toString(), this.currentContact)
      .then((response) => {
        console.log(response.data);
        this.message = "The Contact was updated successfully!";
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteContact() {
    ContactDataService.delete(this.currentContact.documentNumber.toString())
      .then((response) => {
        console.log(response.data);
        this.$router.push({ name: "Contacts" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  mounted() {
    this.message = "";
    this.getContact(this.$route.params.id);
  }
}
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
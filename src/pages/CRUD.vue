<template>
  <div>
    <!-- Form untuk menambah pengguna -->
    <q-form @submit="addUser" class="form-container">
      <q-input
        class="q-ma-md"
        v-model="newUser.name"
        label="Nama"
        outlined
        dense
        :rules="nameRules"
      />
      <q-input
        class="q-ma-md"
        v-model="newUser.email"
        label="Email"
        outlined
        dense
        :rules="emailRules"
      />
      <q-btn type="submit" label="Tambah" class="submit-btn" />
    </q-form>

    <!-- Daftar pengguna -->
    <q-list class="user-list">
      <q-item v-for="user in users" :key="user.id" class="user-item">
        <q-item-section>
          <q-item-label class="user-name">{{ user.name }}</q-item-label>
          <q-item-label caption class="user-email">{{
            user.email
          }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-btn @click="editUser(user)" label="Edit" class="edit-btn" />
          <q-btn
            @click="deleteUser(user.id)"
            label="Hapus"
            class="delete-btn"
          />
        </q-item-section>
      </q-item>
    </q-list>

    <!-- Form untuk mengubah pengguna -->
    <q-dialog v-model="editDialog" persistent>
      <q-card>
        <q-card-section>
          <q-form @submit="updateUser" class="edit-form">
            <q-input
              v-model="editedUser.name"
              label="Nama"
              outlined
              dense
              :rules="nameRules"
            />
            <q-input
              v-model="editedUser.email"
              label="Email"
              outlined
              dense
              :rules="emailRules"
            />
            <q-btn type="submit" label="Simpan" class="submit-btn" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: "John Doe", email: "john.doe@example.com" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
      ],
      newUser: {
        name: "",
        email: "",
      },
      editedUser: {
        id: null,
        name: "",
        email: "",
      },
      editDialog: false,
      nameRules: [(v) => (!!v && v.trim() !== "") || "Nama tidak boleh kosong"],
      emailRules: [
        (v) => (!!v && v.trim() !== "") || "Email tidak boleh kosong",
        (v) => /.+@.+\..+/.test(v) || "Email harus valid",
      ],
    };
  },
  methods: {
    // Tambah pengguna baru
    addUser() {
      const newUser = {
        id: this.users.length + 1,
        name: this.newUser.name,
        email: this.newUser.email,
      };
      this.users.push(newUser);
      this.clearForm();
    },
    // Hapus pengguna
    deleteUser(userId) {
      this.users = this.users.filter((user) => user.id !== userId);
    },
    // Tampilkan dialog edit dan isi data pengguna yang akan diubah
    editUser(user) {
      this.editedUser.id = user.id;
      this.editedUser.name = user.name;
      this.editedUser.email = user.email;
      this.editDialog = true;
    },
    // Update data pengguna setelah diubah
    updateUser() {
      const index = this.users.findIndex(
        (user) => user.id === this.editedUser.id
      );
      if (index !== -1) {
        this.users[index].name = this.editedUser.name;
        this.users[index].email = this.editedUser.email;
      }
      this.closeDialog();
    },
    // Tutup dialog edit
    closeDialog() {
      this.editDialog = false;
      this.clearEditedUser();
    },
    // Bersihkan form tambah pengguna
    clearForm() {
      this.newUser.name = "";
      this.newUser.email = "";
    },
    // Bersihkan data pengguna yang akan diubah
    clearEditedUser() {
      this.editedUser.id = null;
      this.editedUser.name = "";
      this.editedUser.email = "";
    },
  },
};
</script>

<style scoped>
/* Gaya untuk form tambah */
.form-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}

.submit-btn {
  margin-top: 15px;
}

/* Gaya untuk daftar pengguna */
.user-list {
  max-width: 600px;
  margin: 20px auto;
  padding: 10px;
}

.user-item {
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.user-name {
  font-weight: bold;
}

.user-email {
  font-size: 0.9em;
  color: #777777;
}

/* Gaya untuk dialog edit */
.edit-form {
  max-width: 300px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
}

.delete-btn {
  margin-left: 10px;
  color: #e91e63;
}
</style>

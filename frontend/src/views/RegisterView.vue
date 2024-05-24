<script setup lang="ts">
import TextInputView from "@/components/form/TextInputView.vue";

const form = {
   email: "",
   password: "",
};

const registerHandler = () => {
   console.log(form);
};
</script>

<template>
   <div>
      <h2>Register</h2>
      <form @submit.prevent="registerHandler">
         <div class="input--divider">
            <TextInputView
               type="email"
               id="email"
               name="email"
               label="Email"
               v-model="form.email"
               required
            />
         </div>
         <div class="input--divider">
            <TextInputView
               type="password"
               id="password"
               name="password"
               label="Password"
               v-model="form.password"
               required
            />
         </div>
         <button type="submit">Register</button>
      </form>
   </div>
</template>

<style></style>

<style scoped>
.input--divider {
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
}

form {
   display: flex;
   flex-direction: column;
   gap: 1rem;
   margin: 0 auto;
   width: 100%;
}
</style>

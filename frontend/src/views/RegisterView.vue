<script setup lang="ts"></script>

<template>
   <div>
      <h2>Register</h2>
      <form>
         <div class="input--divider">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
         </div>
         <div class="input--divider">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
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

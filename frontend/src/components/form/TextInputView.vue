<script setup lang="ts">
const model = defineModel();

defineProps({
   modelValue: String,
   type: String,
   id: String,
   name: String,
   label: String,
   placeholder: String,
   required: Boolean,
});
</script>

<template>
   <label :for="name">{{ label }}</label>
   <input
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      v-model="model"
   />
</template>

<style scoped>
input {
   padding: 0.5rem;
   border: 1px solid hsla(160, 100%, 37%, 1);
   border-radius: 5px;
   background-color: var(--vt-c-indigo);
   color: var(--vt-c-white);
}
</style>

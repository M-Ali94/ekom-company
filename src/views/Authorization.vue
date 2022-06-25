<template>
  <div class="container">
    <h1>LeadHit </h1>
    <div class="form">
      <input type="text" v-model="text" placeholder="id сайта" id="inputText5" class="form-control" required>
      <span class="err-text" v-show="error"> your id must be 24 charts</span>
      <button @click="submit" type="button" class="btn btn-secondary">Login</button>
    </div>

  </div>
</template>
<script>
import store from "../store"

export default {
  name: 'Home',
  data() {
    return {
      text: '',
      error: false
    }
  },
  watch: {
    text() {
      this.error = false
    }
  },
  methods: {
    submit() {
      if (this.text.length === 24) {
        store.dispatch('login')
      } else {
        this.error = true
      }
    }
  }
}
</script>
<style>
.err-text {
  color: red;
  font-size: 14px;
  padding-left: 10px;
}

.btn {
  float: right;
  margin: 10px;
}

.form {
  margin: auto;
  width: max(50vw, 400px);
}
</style>
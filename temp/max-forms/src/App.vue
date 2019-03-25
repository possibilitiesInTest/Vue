<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Full Name (First Name + Last Name) -->

          <div class="form-group">
            <label for="name.first">First</label>
            <input v-model="user.name.first" type="text" id="name.first" class="form-control">
            <label for="name.last">Last</label>
            <input v-model="user.name.last" type="text" id="name.last" class="form-control">
          </div>

          <!-- eMail -->
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="user.email" type="email" id="userEmail" class="form-control">
          </div>

          <!-- Password -->
          <div class="form-group">
            <label for="password">Password</label>
            <input v-model="user.password" type="password" id="userPassword" class="form-control">
          </div>

          <!-- Store Data? Yes/No -->
          <div class="form-group">
            <label for="yes">Yes</label>
            <input v-model="user.checkbox" type="checkbox" id="yes" value="yes">
            <label for="no">No</label>
            <input v-model="user.checkbox" type="checkbox" id="no" value="no">
          </div>

          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- eMail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div :user="user" class="panel-body">
              <p >Full Name: {{ user.name.first }} {{ user.name.last }}</p>
            <p >Mail: {{ user.email }} </p>
            <p >Password: {{ user.password }}</p>
            <p >Store in Database?:  {{ user.checkbox }}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: {
          first: '',
          last: ''
        },
      email: '',
      password: '',
      checkbox: ''
    }
      }
  }
};
</script>

<style>
</style>

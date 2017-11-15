<template>
  <div class="row">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Register</div>
                    <div class="panel-body">
                        <form @submit.prevent="register" @keydown="form.onKeydown($event)">
                            <!-- Name -->
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label text-md-right">ชื่อ-นามสกุล</label>
                                <div class="col-md-7">
                                <input v-model="form.username" type="text" name="username" class="form-control"
                                    :class="{ 'is-invalid': form.errors.has('username') }">
                                <has-error :form="form" field="username"></has-error>
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label text-md-right">อีเมล</label>
                                <div class="col-md-7">
                                <input v-model="form.email" type="email" name="email" class="form-control"
                                    :class="{ 'is-invalid': form.errors.has('email') }">
                                <has-error :form="form" field="email"></has-error>
                                </div>
                            </div>

                            <!-- Password -->
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label text-md-right">รหัสผ่าน</label>
                                <div class="col-md-7">
                                <input v-model="form.password" type="password" name="password" class="form-control"
                                    :class="{ 'is-invalid': form.errors.has('password') }">
                                <has-error :form="form" field="password"></has-error>
                                </div>
                            </div>

                            <!-- Password Confirmation -->
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label text-md-right">ยืนยันรหัสผ่าน</label>
                                <div class="col-md-7">
                                <input v-model="form.password_confirmation" type="password" name="password_confirmation" class="form-control"
                                    :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
                                <has-error :form="form" field="password_confirmation"></has-error>
                                </div>
                            </div>

                            <!-- Submit Button -->
                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        บันทึกข้อมูล
                                    </button>
                                </div>
                            </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

export default {

  data: () => ({
    form: new Form({
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
  }),

  methods: {
    // async register () {
    //   // Register the user.
    //   const { data } = await this.form.post('/api/register')

    //   // Log in the user.
    //   const { data: { token }} = await this.form.post('/api/login')

    //   // Save the token.
    //   this.$store.dispatch('saveToken', { token })

    //   // Update the user.
    //   await this.$store.dispatch('updateUser', { user: data })

    //   // Redirect home.
    //   this.$router.push({ name: 'home' })
    // }
  }
}
</script>

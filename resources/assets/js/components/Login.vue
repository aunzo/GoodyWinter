<template>
    <div class="login-box">
        <div class="login-box-body">
            <div class="login-logo">
                <img :src="'/images/goodyWinterLogo.png'"/>
            </div>
            <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                
                <div class="form-group has-feedback">
                    <input v-model="form.username" type="username" class="form-control" :class="{ 'is-invalid': form.errors.has('username') }" placeholder="ชื่อผู้ใช้">
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    <has-error style="color:#ff0000" :form="form" field="username"></has-error>
                </div>
                <div class="form-group has-feedback">
                    <input v-model="form.password" type="password" class="form-control" :class="{ 'is-invalid': form.errors.has('password') }" placeholder="รหัสผ่าน">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    <has-error style="color:#ff0000" :form="form" field="password"></has-error>
                </div>
                <div class="row">
                    <div class="col-xs-8">
                    <div class="checkbox icheck"> 
                        <label>
                        <input type="checkbox" v-model="form.remember"> จำไว้ในระบบ
                        </label>
                    </div>
                    </div>
                    <div class="col-xs-4">
                        <button type="submit" class="btn btn-primary btn-block btn-flat">เข้าสู่ระบบ</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

export default 
{
  data: () => ({
    form: new Form({
      username: '',
      password: '',
      remember: false 
    }),
    
  }),
  methods: 
  {
    login () 
    {
        this
            .form
            .post('api/login')
            .then((response) =>
            {
                console.log(response.data.isLoginSuccess)
            })
            .catch((error) => 
            {
                console.log(error.message);
            });
    }
  },
  mounted: function()
  {
    $('input[type=checkbox]').on('ifChecked', (e) => {
        this.form.remember = true;
    })
    $('input[type=checkbox]').on('ifUnchecked', (e) => {
        this.form.remember = false;
    })
    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    })
  }
}
</script>

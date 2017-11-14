<template>
    <div class="login-box">
        <div class="login-box-body">
            <div class="login-logo">
                <img :src="'/images/goodyWinterLogo.png'"/>
            </div>
            <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                <div class="form-group has-feedback">
                    <input type="username" class="form-control" placeholder="ชื่อผู้ใช้">
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="รหัสผ่าน">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-8">
                    <div class="checkbox icheck"> 
                        <label>
                        <input type="checkbox" v-model="remember"> จำไว้ในระบบ
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
import Form from 'vform'

export default {

  data: () => ({
    form: new Form({
      username: '',
      password: ''
    }),
    remember: false
  }),
  methods: {
    login () {
        console.log(this.form);
        this.axios.post('/login', this.item).then((response) => {
          console.log('response: ',response.data);
        }).catch(function(thrown) {
            console.log('Request canceled', thrown.message);
        });
        // axios.post('/login',form.data)
    //   // Submit the form.
    //   const { data } = await this.form.post('/api/login')

    //   // Save the token.
    //   this.$store.dispatch('saveToken', {
    //     token: data.token,
    //     remember: this.remember
    //   })

    //   // Fetch the user.
    //   await this.$store.dispatch('fetchUser')

    //   // Redirect home.
    //   this.$router.push({ name: 'home' })
    }
  },
  mounted: function()
  {
    jQuery('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });
  }
}
</script>

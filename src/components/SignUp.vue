<template>
    <div class="form-style-2">
        <div class="form-style-2-heading">
            Please Sign up!
        </div>
        <form method="post">
            <label for="login">Login
                <input class="input-field" id="login" name="login" v-model="login"><br>
            </label>
            <label for="password">Password
                <input class="input-field" type="password" id="password" name="password" v-model="password"><br>
            </label>
            <input @click="signUp" class="form-submit" type="button" value="Sign up">
        </form>
        <br>
        <router-link to="/login" >I have account</router-link>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'SignUp',
        data: function () {
            return {
                password: '',
                login: ''
            }
        },
        mounted: function () {
            if (window.localStorage.getItem("AUTH") !== null) {
                axios({
                    url: window.hostname + "/login",
                    method: "post",
                    contentType: "application/json",
                    headers: {
                        "AUTH": window.localStorage.getItem("AUTH")
                    }
                }).then((response => {
                    if (response.status == 200) {
                        window.location.href = '/profile'
                    }
                }));
            }
        },
        methods: {
            signUp: function () {
                // eslint-disable-next-line no-console
                console.log(this.login);
                // eslint-disable-next-line no-console
                console.log(this.password);
                axios({
                    method: 'post',
                    contentType: "application/json",
                    url: window.hostname + '/signUp',
                    data: {login: this.login, password: this.password}
                }).then((response => {
                    // eslint-disable-next-line no-console
                    console.log(response);
                    if (response.status == 200) {
                        window.location.href = '/login'
                    }

                }));
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
    @import '../assets/styles.css';
    @import '../assets/bootstrap.min.css';
</style>

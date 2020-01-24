<template>
    <div class="form-style-2">
        <div class="form-style-2-heading">
            Please Login!
        </div>
        <form method="post">
            <label for="login">Логин
                <input class="input-field" type="text" id="login" name="login">
            </label>
            <br>
            <label for="password">Пароль
                <input class="input-field" type="password" id="password" name="password">
            </label>
            <br>
            <label for="remember-me">
                <input type="checkbox" id="remember-me" name="remember-me">Запомнить меня</label>
            <input type="button" @click="submit" value="Login">
        </form>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Login',
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
            submit: function () {
                axios({
                    method: 'post',
                    contentType: "application/json",
                    url: window.hostname + '/login',
                    data: {login: this.login, password: this.password}
                }).then((response => {
                    if (response.status == 200) {
                        // eslint-disable-next-line no-console
                        console.log(response.data);
                        window.localStorage.setItem("AUTH", response.data.value);
                        window.location.href = '/profile'
                    }
                }));
            }
        }
    }
</script>

<style type="text/css">
    @import '../assets/styles.css';
    @import '../assets/bootstrap.min.css';
</style>
import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_RESET } from "../../Api";
import { Navigate } from "react-router-dom";
import Head from "../Helper/Head";

const LoginPasswordReset = () => {
    const [login, setLogin] = React.useState("");
    const [key, setKey] = React.useState("");
    const password = useForm();
    const { loading, request } = useFetch();

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get("key");
        const login = params.get("login");
        if (key) setKey(key);
        if (login) setLogin(login);
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = PASSWORD_RESET({
            login,
            key,
            password: password.value,
        });
        const { response } = await request(url, options);
        if (response.ok) Navigate("/login");
    }

    return (
        <section className="animeLeft">
            <Head title="Resete a sua senha" />
            <h1 className="title"> Resete a Senha</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Nova senha" type="password" name="password" />
                {loading ? (
                    <Button disabled>Resetando...</Button>
                ) : (
                    <Button>Resetar</Button>
                )}
            </form>
        </section>
    );
};

export default LoginPasswordReset;

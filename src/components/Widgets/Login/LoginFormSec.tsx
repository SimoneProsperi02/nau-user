/**
 * The LoginFormSection Component.
 * @param props The Component props
 * @returns React.JSX.Element
 *
 */

import { useContext, useRef, useState } from "react";
import Button from "@/components/UI/Buttons/Button";
import LoginFormWrapper from "@/components/Widgets/Login/LoginFormWrapper";
import css from "@/styles/form.module.css";
import { useRouter } from "next/router";
import PasswordInput from "@/components/UI/Inputs/PasswordInput";
import Input from "@/components/UI/Inputs/Input";
import LoginHelpers from "./LoginHelpers";
import AuthContext from "@/store/Auth/AuthContext";
import SpinLoader from "@/components/UI/Icons/Loaders/SpinLoader";

const LoginFormSec: React.FC = (): JSX.Element => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | JSX.Element | null>(null);
  const { logIn } = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler: React.FormEventHandler = async (e) => {
    e.preventDefault();
    setError(null);
    const emailValue = emailRef.current?.value;
    const passwordValue = passwordRef.current?.value;
    if (!emailValue || emailValue.trim().length === 0) {
      setError("Inserisci un indirizzo email!");
      emailRef.current?.focus();
      return;
    }

    if (!passwordValue || passwordValue.trim().length === 0) {
      setError("Inserisci un password!");
      passwordRef.current?.focus();
      return;
    }

    setIsLoading(true);

    try {
      await logIn({
        email: emailValue,
        password: passwordValue,
      });
      router.push("/");

      return;
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginFormWrapper>
      <form className={css.form} onSubmit={submitHandler} noValidate={true}>
        <div>
          <p className={css.label}>Email</p>
          <Input
            ref={emailRef}
            type="email"
            id="email"
            label="email"
            required={true}
          />
        </div>
        <div>
          <p className={css.label}>Password</p>
          <PasswordInput
            type="password"
            id="password"
            required={true}
            ref={passwordRef}
            label="password"
          />
        </div>

        <div className="flex w-[100%] justify-between">
          <LoginHelpers />
        </div>
        <Button
          type="submit"
          title="ACCEDI"
          className="w-[44%] flex justify-center self-center"
        >
          {isLoading ? <SpinLoader className="w-6 h-6" /> : "ACCEDI"}
        </Button>
      </form>
    </LoginFormWrapper>
  );
};

export default LoginFormSec;

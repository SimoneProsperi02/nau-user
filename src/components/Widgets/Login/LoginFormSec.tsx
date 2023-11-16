/**
 * The LoginFormSection Component.
 * @param props The Component props
 * @returns React.JSX.Element
 *
 */

import { useRef, useState } from "react";

import Button from "@/components/UI/Buttons/Button";
import LoginFormWrapper from "@/components/Widgets/Login/LoginFormWrapper";
import css from "@/styles/form.module.css";
import { useRouter } from "next/router";
import PasswordInput from "@/components/UI/Inputs/PasswordInput";
import Input from "@/components/UI/Inputs/Input";
import LoginHelpers from "./LoginHelpers";

const LoginFormSec: React.FC = (): JSX.Element => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | JSX.Element | null>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler: React.FormEventHandler = async (e) => {
    e.preventDefault();
    setError(null);
    const emailValue = emailRef.current?.value;
    const passwordValue = passwordRef.current?.value;
    if (!emailValue || emailValue.trim().length === 0) {
      setError("Per favore, inserisci un indirizzo email.");
      emailRef.current?.focus();
      return;
    }

    if (!passwordValue || passwordValue.trim().length === 0) {
      setError("Per favore, inserisci un password.");
      passwordRef.current?.focus();
      return;
    }

    setIsLoading(true);

    try {
      if (isLogin) {
        const { logIn } = await import("@/lib/services/auth");
        await logIn({
          email: emailValue,
          password: passwordValue,
        });
        setIsLoading(false);
        router.push("/");
        return;
      }
      setIsLoading(false);
      setIsLogin(true);
    } catch (err) {
      console.error("error");
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
        <Button type="submit" title="ACCEDI" className="w-[44%] self-center" />
      </form>
      {isLoading && "Loading..."}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </LoginFormWrapper>
  );
};

export default LoginFormSec;

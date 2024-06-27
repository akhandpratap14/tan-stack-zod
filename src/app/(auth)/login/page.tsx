"use client";
import { LoginSchema } from "@/utils/zod/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

type Inputs = z.infer<typeof LoginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(LoginSchema),
  });

  const processForm: SubmitHandler<Inputs> = async (data: any) => {
    console.log(data);
    // let obj = {
    //   username: data.username,
    //   password: data.password,
    // };
    // LoginMutation.mutate(obj);
  };

  return (
    <div className="border h-96 w-96 rounded-xl flex items-center justify-center">
      <div className="flex flex-col px-5 justify-center w-full items-center gap-y-5">
        <div className="mb-5">Welcome Back</div>
        <div className="flex flex-col w-full justify-center gap-y-2 items-center">
          <form className="w-full" onSubmit={handleSubmit(processForm)}>
            <div className="w-full relative mb-4">
              <input
                type="text"
                id="username"
                className="w-full rounded-md h-12 bg-gray-100 text-black px-2 focus:outline-none peer placeholder-transparent"
                placeholder="username"
                autoComplete="off"
                {...register("username")}
              />
              <label htmlFor="username" className="label-primary">
                username
              </label>
            </div>
            <div className="w-full relative mb-4">
              <input
                type="text"
                id="password"
                className="w-full rounded-md h-12 bg-gray-100 text-black px-2 focus:outline-none peer placeholder-transparent"
                placeholder="password"
                autoComplete="off"
                {...register("password")}
              />
              <label htmlFor="password" className="label-primary">
                password
              </label>
            </div>
            <button
              type="submit"
              className="h-12 w-full rounded-xl hvr-grow bg-blue-500 text-white flex items-center justify-center "
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { Controller, useForm, ErrorMessage } from "react-hook-form";
import Select from "react-select";
import { useRef } from "react";

const isValidEmail = (email) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

export default function CountNotifications() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: "Bill", email: "gates@gmail.com" },
  });
  const countRef = useRef(0);

  console.log(watch());

  const onSubmit = (data) => {
    countRef.current++;
    console.log(data);
  };

  return (
    <div>
      <form className="formSubmit" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="First Name"
          {...register("firstName", {
            required: true,
            minLength: { value: 3, message: "Min length is 3." },
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <input
          placeholder="Last Name"
          {...register("lastName", {
            required: true,
            minLength: { value: 3, message: "Min length is 3." },
          })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <input
          placeholder="Email"
          type="email"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors.email && <p>Please check the Email</p>}

        <input
          placeholder="Mobile Number"
          {...register("mobileNumber", {
            required: true,
            minLength: { value: 9, message: "Min length is 9." },
          })}
        />
        {errors.mobileNumber && <p>{errors.mobileNumber.message}</p>}
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "This field is required.",
            minLength: { value: 5, message: "Min length is 5." },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <Controller
          name="select"
          control={control}
          className="controller"
          render={({ field }) => (
            <Select
              className="select"
              {...field}
              options={[
                { value: "mr", label: "Mr" },
                { value: "mrs", label: "Mrs" },
                { value: "miss", label: "miss" },
                { value: "dr", label: "Dr" },
              ]}
            />
          )}
        />
        <br></br>
        <input type="submit" />
      </form>
      <h3>Submitted {countRef.current} times.</h3>
    </div>
  );
}

import { useForm } from "react-hook-form";
import { useRef } from "react";

//import styled components
import {
  Wrapper,
  FormContainer,
  ImgContainer,
  ErrorText,
  SubmitBtn,
  Input,
  SelectedInput
} from "./styled";

export default function signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  const password = useRef({});
  password.current = watch("password", "");
  return (
    <Wrapper>
      <FormContainer>
        <div class="content">
          <div class="row">
            <h1>Register</h1>
            <p class="sub__title">
              Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
              adipisicing.
            </p>
            <div className="form-container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid-container">
                  <div className="FirstName form-group">
                    <label htmlFor="FirstName">First Name</label>
                    <Input
                      id="fname"
                      type="text"
                      placeholder="e.g. John"
                      {...register("FirstName", {
                        required: true,
                        maxLength: 30
                      })}
                    />
                    {errors.FirstName &&
                      errors.FirstName.type === "required" && (
                        <ErrorText>First Name is required</ErrorText>
                      )}
                    {errors.FirstName &&
                      errors.FirstName.type === "maxLength" && (
                        <ErrorText>Max Length is 30</ErrorText>
                      )}
                  </div>
                  <div className="LastName form-group">
                    <label htmlFor="LastName">Last Name</label>
                    <Input
                      type="text"
                      placeholder="e.g. Smith"
                      {...register("LastName", {
                        required: true,
                        maxLength: 30
                      })}
                    />
                    {errors.LastName && errors.LastName.type === "required" && (
                      <ErrorText>Last Name is required</ErrorText>
                    )}
                    {errors.LastName &&
                      errors.LastName.type === "maxLength" && (
                        <ErrorText>Max Length is 30</ErrorText>
                      )}
                  </div>
                  <div className="Email form-group">
                    <label htmlFor="Email">Email Address</label>
                    <Input
                      type="email"
                      placeholder="e.g. john@your-domain.com"
                      {...register("Email", {
                        required: true,
                        pattern: /^\S+@\S+$/i
                      })}
                    />
                    {errors.Email && errors.Email.type === "required" && (
                      <ErrorText>Email is required</ErrorText>
                    )}
                  </div>
                  <div className="Phone form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="01858 6711 87"
                      {...register("phone", {
                        required: true,
                        min: 11,
                        maxLength: 11
                      })}
                    />
                    {errors.phone && errors.phone.type === "required" && (
                      <ErrorText>Phone number is required</ErrorText>
                    )}
                    {errors.phone && errors.phone.type === "maxLength" && (
                      <ErrorText>Max Length is 11</ErrorText>
                    )}
                  </div>
                  <div className="Website form-group">
                    <label htmlFor="website">Website</label>
                    <Input
                      type="url"
                      name="website"
                      placeholder="e.g. https://google.com"
                      {...register("Website", { required: false })}
                    />
                  </div>
                  <div className="Password form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                      type="password"
                      placeholder="Your Password"
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                          message:
                            "Password needs minimum 8 characters with at least 1 word and 1 number"
                        }
                      })}
                    />
                    {errors.password && (
                      <ErrorText>{errors.password.message}</ErrorText>
                    )}
                  </div>
                  <div className="ReTypePassword form-group">
                    <label htmlFor="reTypePassword">Re-type Password</label>
                    <Input
                      type="password"
                      placeholder="Your Password"
                      {...register("password_repeat", {
                        required: "Please type again the password",
                        validate: value =>
                          value === password.current || "Passwords do not match"
                      })}
                    />
                    {errors.password_repeat && (
                      <ErrorText>{errors.password_repeat.message}</ErrorText>
                    )}
                  </div>
                </div>
                <div class="checkbox__group">
                  <label htmlFor="">
                    <SelectedInput
                      type="checkbox"
                      {...register("agreement", { required: true })}
                    />
                    <span className="agreement__label">
                      Creating an account means you're okay with our Terms and
                      Conditions and our Privacy Policy.
                    </span>
                  </label>
                </div>

                <SubmitBtn type="submit" />
              </form>
            </div>
          </div>
        </div>
      </FormContainer>
      <ImgContainer></ImgContainer>
    </Wrapper>
  );
}

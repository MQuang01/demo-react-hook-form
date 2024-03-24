import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Bạn cần phải nhập tên"),
  email: yup.string().email().required("Yêu cầu nhập email example@example.com"),
});

function CreateOrder() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateOrder = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Create Order</h1>
      </div>
      <form
        onSubmit={handleSubmit(handleCreateOrder)}
        className="needs-validation"
      >
        <div className="form-group mb-3 has-validation">
          <label className="form-label">Name</label>
          <input
            type="text"
            className={`form-control ${
              errors?.name?.message ? "is-invalid" : ""
            }`}
            {...register("name")}
            id="name"
            placeholder="Enter name"
          />
          <span className="invalid-feedback">{errors?.name?.message}</span>
        </div>

        <div className="form-group mb-3 has-validation">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${
              errors?.email?.message ? "is-invalid" : ""
            }`}
            {...register("email")}
            id="email"
            placeholder="Enter email"
          />
          <span className="invalid-feedback">{errors?.email?.message}</span>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
export default CreateOrder;

import {
  Checkbox,
  FormControlLabel,
  Grid,
  Input,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import AsyncForm from "./AsyncForm";

//form
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Register = () => {
  const schema = yup.object().shape({
    full_name: yup
      .string()
      .required("Full Name is required")
      .min(2, "min 2 character"),
    email: yup.string().required("Please Enter Email").email(),
    mobile_number: yup
      .string()
      .required("Please Enter Mobile Number")
      .min(10, "min 10 character")
      .max(10, "max 10 character"),
    company_name: yup
      .string()
      .required("Company Name is required")
      .min(2, "min 2 character"),
    designation: yup
      .string()
      .required("Designation is required")
      .min(2, "min 2 character"),
    referred: yup.string().required("Referred is required"),
    Terms: yup
      .boolean()
      .required()
      .oneOf([true], "Please Accept Terms & Conditions"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const registerForm = async (data) => {
    console.log(data);
  };

  return (
    <>
      <AsyncForm
        onSubmit={handleSubmit(registerForm)}
        buttonSx={{ width: "100%", displa: "block", margin: "0 auto" }}
        gridProps={{
          container: true,
          columnSpacing: "12px",
          alignItems: "flex-start",
        }}
        buttonText="Submit"
        mt="0px"
      >
        <Grid item xs={12} height="80px">
          <Typography>Full Name</Typography>
          <Input
            type="text"
            {...register("full_name")}
            error={Boolean(errors?.full_name?.message)}
            placeholder="Enter Full Name"
            variant="contained"
          />
          <Typography variant="body2" color="error">
            {errors?.full_name?.message}
          </Typography>
        </Grid>

        <Grid item xs={12} height="80px">
          <Typography>Email Id</Typography>
          <Input
            type="email"
            {...register("email")}
            error={Boolean(errors?.email?.message)}
            placeholder="Enter Your Email"
          />
          <Typography variant="body2" color="error">
            {errors?.email?.message}
          </Typography>
        </Grid>

        <Grid item xs={12} height="80px">
          <Typography>Mobile Number</Typography>
          <Input
            type="number"
            {...register("mobile_number")}
            error={Boolean(errors?.mobile_number?.message)}
            placeholder="Enter Your Number"
          />
          <Typography variant="body2" color="error">
            {errors?.mobile_number?.message}
          </Typography>
        </Grid>

        <Grid item xs={12} height="80px">
          <Typography>Company Name</Typography>
          <Input
            type="text"
            {...register("company_name")}
            error={Boolean(errors?.company_name?.message)}
            placeholder="Enter Company Name"
          />
          <Typography variant="body2" color="error">
            {errors?.company_name?.message}
          </Typography>
        </Grid>

        <Grid item xs={12} height="80px">
          <Typography>Designation</Typography>
          <Input
            type="text"
            {...register("designation")}
            error={Boolean(errors?.designation?.message)}
            placeholder="Designation"
          />
          <Typography variant="body2" color="error">
            {errors?.designation?.message}
          </Typography>
        </Grid>

        <Grid item xs={12} height="80px">
          <Typography>Referred by</Typography>

          <Select
            {...register("referred")}
            error={Boolean(errors?.referred?.message)}
            label="Referred"
          >
            <MenuItem value="BSE">BSE</MenuItem>
            <MenuItem value="Laja">Laja</MenuItem>
            <MenuItem value="IBG">IBG</MenuItem>
          </Select>
          <Typography variant="body2" color="error">
            {errors?.referred?.message}
          </Typography>
        </Grid>

        <Grid item xs={12} height="60px">
          <FormControlLabel
            control={
              <Checkbox sx={{ padding: "0px",marginLeft:"8px" }} {...register("Terms")} />
            }
            label={<Typography>Terms & Condition</Typography>}
          />
          <Typography variant="body2" color="error">
            {errors?.Terms?.message}
          </Typography>
        </Grid>
      </AsyncForm>
    </>
  );
};

export default Register;

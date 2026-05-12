"use client";
import React from "react";
import styles from "../AdmissionProcedure/applicationform.module.css";
import PhoneInput from "react-phone-input-2";
import {
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const PersonalDetails = ({
  form,
  errors,
  handleChange,
  setForm,
  setErrors,
  validateField,
}) => {
  return (
    <>
      <Typography mb={4} className={styles.sectionTitle}>
        PERSONAL DETAILS
      </Typography>

      <div className={styles.form}>
        <div className={styles.formrow}>
          <TextField
            label="First Name*"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            fullWidth
          />
        </div>

        <div className={styles.formrow}>
          <TextField
            label="Last Name*"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            fullWidth
          />
        </div>

        <div className={styles.formrow}>
          <TextField
            label="Date of Birth*"
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            error={!!errors.dob}
            helperText={errors.dob}
            fullWidth
          />
        </div>

        <div className={styles.formrow}>
          <Typography fontWeight={500} mb={1}>
            Gender*
          </Typography>
          <RadioGroup
            row
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="others"
              control={<Radio />}
              label="Prefer not to say"
            />
          </RadioGroup>
          {errors.gender && (
            <Typography variant="caption" sx={{ color: "#d32f2f", mt: 0.5 }}>
              {errors.gender}
            </Typography>
          )}
        </div>

        <div className={styles.formrow}>
          <PhoneInput
            country={"in"}
            value={form.phone}
            onChange={(value) => {
              setForm((prev) => ({ ...prev, phone: value }));

              setErrors((prev) => ({
                ...prev,
                phone: validateField("phone", value),
              }));
            }}
            inputStyle={{
              width: "100%",
              height: "56px",
              borderRadius: "12px",
              background: "#f3f6fb",
              border: errors.phone ? "1px solid #d32f2f" : "1px solid #e3e8ef",
            }}
            buttonStyle={{
              borderTopLeftRadius: "12px",
              borderBottomLeftRadius: "12px",
              border: errors.phone ? "1px solid #d32f2f" : "1px solid #e3e8ef",
            }}
          />

          {errors.phone && (
            <Typography variant="caption" sx={{ color: "#d32f2f", mt: 0.5 }}>
              {errors.phone}
            </Typography>
          )}
        </div>

        <div className={styles.formrow}>
          <TextField
            label="Email*"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
          />
        </div>

        <div className={styles.formrow}>
          <TextField
            label="PinCode*"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            error={!!errors.pincode}
            helperText={errors.pincode}
            fullWidth
          />
        </div>
        <div className={styles.formrow}>
          <TextField
            label="District*"
            name="district"
            value={form.district}
            onChange={handleChange}
            error={!!errors.district}
            helperText={errors.district}
            fullWidth
          />
        </div>

        <div className={styles.formrow}>
          <TextField
            label="State*"
            name="state"
            value={form.state}
            onChange={handleChange}
            error={!!errors.state}
            helperText={errors.state}
            fullWidth
          />
        </div>
        <div className={styles.formrow}>
          <TextField
            label="Country*"
            name="country"
            value={form.country}
            onChange={handleChange}
            error={!!errors.country}
            helperText={errors.country}
            fullWidth
          />
        </div>

        <div className={`${styles.formrow} ${styles.full}`}>
          <TextField
            label="Full Address*"
            name="address"
            value={form.address}
            onChange={handleChange}
            error={!!errors.address}
            helperText={errors.address}
            multiline
            rows={3}
            fullWidth
          />
        </div>

        <div className={styles.formrow}>
          <TextField
            label="Blood Group*"
            name="bloodGroup"
            value={form.bloodGroup}
            onChange={handleChange}
            error={!!errors.bloodGroup}
            helperText={errors.bloodGroup}
            fullWidth
          />
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;

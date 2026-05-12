"use client";

import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { reqCallBack } from "@/api/serviceApi";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "30px",
    backgroundColor: "#f3f5f7",
    "& fieldset": { border: "none" },
  },
};

export default function ContactModal({ open, onClose }) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [status, setStatus] = useState("idle");
  // idle | sending | success
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // 🔹 validate single field
  const validateField = (field, value) => {
    let error = "";

    if (field === "firstName" && !value.trim())
      error = "First name is required";

    if (field === "lastName" && !value.trim()) error = "Last name is required";

    if (field === "email") {
      if (!value.trim()) error = "Email is required";
      else if (!/^\S+@\S+\.\S+$/.test(value)) error = "Enter a valid email";
    }

    if (field === "phone" && !value) error = "Phone number is required";

    if (field === "subject" && !value.trim()) error = "Subject is required";

    if (field === "message" && !value.trim()) error = "Message is required";

    setErrors((prev) => ({ ...prev, [field]: error }));
    return error;
  };

  // 🔹 handle change (live validation)
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  // 🔹 validate all on submit
  const validateAll = () => {
    let valid = true;
    Object.keys(form).forEach((field) => {
      const err = validateField(field, form[field]);
      if (err) valid = false;
    });
    return valid;
  };

  const handleSubmit = async () => {
    if (!validateAll()) return;

    try {
      setStatus("sending");

      await reqCallBack(form);

      setStatus("success");
      setSnackbarOpen(true); // ⭐ open snackbar

      setTimeout(() => {
        onClose();
        setStatus("idle");

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 1000);
    } catch (error) {
      console.error("API Error:", error);
      setStatus("idle"); // reset button if error happens
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={status === "sending" ? undefined : onClose}
        fullWidth
        maxWidth="sm"
        sx={{ zIndex: 9999999 }}
        PaperProps={{ sx: { borderRadius: "16px" } }}
      >
        <DialogTitle sx={{ fontWeight: 600 }}>
          Your Next Step Starts Here
          <IconButton
            onClick={onClose}
            disabled={status === "sending"}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ px: 4, py: 3 }}>
          <Box mb={2}>
            <p style={{ marginTop: 8, color: "#666" }}>
              Send us a message and let’s make things happen.
            </p>
          </Box>

          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" gap={2}>
              <TextField
                fullWidth
                placeholder="First Name"
                value={form.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                error={!!errors.firstName}
                helperText={errors.firstName}
                sx={inputStyle}
              />

              <TextField
                fullWidth
                placeholder="Last Name"
                value={form.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                error={!!errors.lastName}
                helperText={errors.lastName}
                sx={inputStyle}
              />
            </Box>

            <TextField
              fullWidth
              placeholder="Mail ID"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              sx={inputStyle}
            />

            <div>
              <PhoneInput
                country={"in"}
                value={form.phone}
                onChange={(value) => handleChange("phone", value)}
                enableSearch
                inputStyle={{
                  width: "100%",
                  height: "56px",
                  borderRadius: "30px",
                  border: "none",
                  background: "#f3f5f7",
                  paddingLeft: "48px",
                }}
                buttonStyle={{ border: "none", background: "transparent" }}
              />
              {errors.phone && (
                <p style={{ color: "#d32f2f", fontSize: 12, marginTop: 4 }}>
                  {errors.phone}
                </p>
              )}
            </div>

            <TextField
              fullWidth
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              error={!!errors.subject}
              helperText={errors.subject}
              sx={inputStyle}
            />

            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Message"
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              error={!!errors.message}
              helperText={errors.message}
              sx={inputStyle}
            />

            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={status === "sending"}
              sx={{
                mt: 1,
                borderRadius: "30px",
                textTransform: "none",
                height: 45,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,

                background: "linear-gradient(135deg, #144196, #1e5bd8)",

                transition: "transform 0.2s ease, box-shadow 0.2s ease",

                "&:hover": {
                  background: "linear-gradient(135deg, #144196, #1e5bd8)", // keep gradient
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 14px rgba(20, 65, 150, 0.25)",
                },

                "&:active": {
                  transform: "translateY(0)",
                  boxShadow: "0 3px 8px rgba(20, 65, 150, 0.2)",
                },
              }}
            >
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "success" && (
                <>
                  <CheckCircleIcon fontSize="small" />
                  Sent
                </>
              )}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Message sent successfully!
        </Alert>
      </Snackbar>
    </>
  );
}

"use client";

import React, { useRef, useState, forwardRef } from "react";
import styles from "@/sections/homeSection/AdmissionProcedure/applicationform.module.css";
import {
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const docs = [
  { key: "image", label: "Image" },
  { key: "signature", label: "Signature" },
  { key: "aadhar", label: "Aadhar" },
  { key: "marksheet", label: "Marksheet" },
  { key: "tc", label: "TC" },
];

const UploadDocuments = ({ form, setForm, termsError, documentsError }) => {
  const fileRefs = useRef({});
  const [openModal, setOpenModal] = useState(false);

  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      alert("File must be less than 1MB");
      return;
    }

    setForm((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [key]: file,
      },
    }));
  };

  const removeFile = (key) => {
    setForm((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [key]: null,
      },
    }));
  };

  return (
    <>
      <Typography mb={2} className={styles.sectionTitle}>
        UPLOAD YOUR DOCUMENT
      </Typography>

      <Typography mb={4} fontSize={14}>
        Note: File size should be less than 1 MB*
      </Typography>

      <Box display="flex" gap={3} flexWrap="wrap">
        {docs.map((doc) => {
          const file = form.documents?.[doc.key];
          const isImage = file && file.type.startsWith("image");

          const previewUrl = file ? URL.createObjectURL(file) : null;

          return (
            <Box
              key={doc.key}
              onClick={() => fileRefs.current[doc.key].click()}
              sx={{
                width: 170,
                height: 170,
                border: file
                  ? "2px dashed #2e7d32"
                  : documentsError
                    ? "2px dashed #d32f2f"
                    : "2px dashed #999",
                borderRadius: 2,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                cursor: "pointer",
                textAlign: "center",
                overflow: "hidden",
                transition: "0.2s",
                "&:hover": {
                  border: "2px dashed #1976d2",
                  background: "#fafafa",
                },
              }}
            >
              <input
                type="file"
                hidden
                ref={(el) => (fileRefs.current[doc.key] = el)}
                onChange={(e) => handleFileChange(e, doc.key)}
              />

              {/* REMOVE BUTTON */}
              {file && (
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(doc.key);
                  }}
                  sx={{
                    position: "absolute",
                    top: 5,
                    right: 5,
                    background: "#fff",
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              )}

              {/* IMAGE PREVIEW */}
              {isImage ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={previewUrl}
                    alt="preview"
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      marginBottom: "6px",
                    }}
                    onLoad={() => URL.revokeObjectURL(previewUrl)}
                  />
                </>
              ) : file ? (
                <InsertDriveFileIcon sx={{ fontSize: 40, color: "#555" }} />
              ) : null}

              <Typography fontWeight={500}>
                {file ? "✔ " : ""}
                {doc.label}
              </Typography>

              <Typography
                fontSize={12}
                sx={{
                  maxWidth: "90%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {file ? file.name : "Click to upload"}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {documentsError && (
        <Typography
          variant="caption"
          sx={{ color: "#d32f2f", mt: 2, display: "block" }}
        >
          Please upload all required documents
        </Typography>
      )}

      {/* TERMS */}
      <FormControlLabel
        sx={{ mt: 4 }}
        control={
          <Checkbox
            checked={form.agreeTerms}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                agreeTerms: e.target.checked,
              }))
            }
          />
        }
        label={
          <>
            I Agree All The{" "}
            <span
              style={{
                color: "#1976d2",
                cursor: "pointer",
                textDecoration: "underline",
                fontWeight: 500,
              }}
              onClick={(e) => {
                e.stopPropagation();
                setOpenModal(true);
              }}
            >
              Terms & Conditions
            </span>
          </>
        }
      />

      {termsError && (
        <Typography
          variant="caption"
          sx={{ color: "#d32f2f", mt: 1, display: "block" }}
        >
          You must accept Terms & Conditions to continue
        </Typography>
      )}

      {/* MODAL */}
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        TransitionComponent={Transition}
        fullWidth
        maxWidth="md"
        sx={{ zIndex: 9999999 }}
        PaperProps={{
          sx: { borderRadius: "16px" },
        }}
      >
        <DialogTitle sx={{ fontWeight: 600 }}>
          Terms & Conditions
          <IconButton
            onClick={() => setOpenModal(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ px: 4, py: 3 }}>
          <p>By enrolling in our courses, you agree to our policies...</p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UploadDocuments;

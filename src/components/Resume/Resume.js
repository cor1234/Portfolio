import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { FaUpload, FaFilePdf } from "react-icons/fa";
import Particle from "../Particle";

const defaultResumeUrl = "/RohanKumarResume.pdf";
const defaultResumeName = "Rohan_Kumar_Resume.pdf";

const isOwnerSession = () => {
  if (typeof window === "undefined") return false;

  const params = new URLSearchParams(window.location.search);
  const ownerQuery = params.get("owner");
  if (ownerQuery === "1" || ownerQuery === "true") return true;
  if (localStorage.getItem("resume_owner") === "true") return true;

  return false;
};

function Resume() {
  const inputRef = useRef(null);
  const [resumeUrl, setResumeUrl] = useState(defaultResumeUrl);
  const [resumeName, setResumeName] = useState(defaultResumeName);
  const [showUpload, setShowUpload] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const storedUrl = localStorage.getItem("resumeUrl");
    const storedName = localStorage.getItem("resumeName");
    const ownerView = isOwnerSession();

    if (storedUrl) {
      setResumeUrl(storedUrl);
      setResumeName(storedName || defaultResumeName);
    } else {
      setResumeUrl(defaultResumeUrl);
      setResumeName(defaultResumeName);
    }

    setShowUpload(ownerView);
  }, []);

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const uploadedName = file.name || defaultResumeName;
    const fileType = (uploadedName.split(".").pop() || "").toLowerCase();

    if (fileType !== "pdf") {
      alert("Please upload a PDF resume.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== "string") return;

      const dataUrl = reader.result;
      setResumeUrl(dataUrl);
      setResumeName(uploadedName);
      localStorage.setItem("resumeUrl", dataUrl);
      localStorage.setItem("resumeName", uploadedName);
      localStorage.setItem("resume_owner", "true");
    };

    reader.readAsDataURL(file);
  };

  const adjustZoom = (value) => {
    setZoom((prev) => Math.min(1.8, Math.max(0.8, Number((prev + value).toFixed(2)))));
  };

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container className="resume-content">
        <h1 className="project-heading">
          Resume <strong className="purple">Download</strong>
        </h1>

        <div className="resume-box">
          <p>
            Download the latest PDF resume, or upload a revised PDF copy from this device.
          </p>

          <div className="resume-actions">
            <a href={resumeUrl} download={resumeName} className="resume-download-btn" title="Download PDF resume">
              <FaFilePdf /> Download
            </a>

            {showUpload && (
              <button type="button" className="resume-upload-btn" onClick={handleUploadClick}>
                <FaUpload /> Upload Resume
              </button>
            )}

            {showUpload && (
              <input
                ref={inputRef}
                type="file"
                accept=".pdf"
                onChange={handleUpload}
                style={{ display: "none" }}
              />
            )}
          </div>

          <div className="resume-view-controls">
            <button type="button" className="zoom-btn" onClick={() => adjustZoom(-0.1)}>
              -
            </button>
            <span className="zoom-label">{Math.round(zoom * 100)}%</span>
            <button type="button" className="zoom-btn" onClick={() => adjustZoom(0.1)}>
              +
            </button>
          </div>

          <div className="resume-meta">
            <strong>Current resume:</strong> {resumeName}
          </div>

          <div className="resume-pdf-frame-wrap">
            <iframe
              title="Resume PDF"
              src={resumeUrl}
              className="resume-pdf-frame"
              scrolling="yes"
              style={{ zoom: zoom }}
            />
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Resume;

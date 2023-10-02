import React from "react";
import { Fade } from "react-awesome-reveal";
import { ContactStyled } from "./Contact.styled";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export interface Props {
  handleNav: () => void;
  navVisible: boolean;
}

interface ContactForm {
  fullName: string;
  email: string;
  CVPDF: string | ArrayBuffer | null;
  CVImage: string | undefined;
  letterPDF: string | ArrayBuffer | null;
  letterImage: string | undefined;
  fileName1: string;
  fileName2: string;
}

const Contact: React.FC<Props> = ({ handleNav, navVisible }) => {
  const [state, setState] = React.useState<ContactForm>({
    fullName: "",
    email: "",
    CVPDF: "",
    CVImage: "",
    letterPDF: "",
    letterImage: "",
    fileName1: "",
    fileName2: "",
  });
  const [stateForm, setStateForm] = React.useState<ContactForm>({
    fullName: "",
    email: "",
    CVPDF: "",
    CVImage: "",
    letterPDF: "",
    letterImage: "",
    fileName1: "",
    fileName2: "",
  });

  const [slideFlag, setSlideFlag] = React.useState(false);
  const [modalFlag, setModalFlag] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStateForm({ ...state });
    setState({
      fullName: "",
      email: "",
      CVPDF: "",
      CVImage: "",
      letterPDF: "",
      letterImage: "",
      fileName1: "",
      fileName2: "",
    });
    setModalFlag(true);
    handleNav();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let selectedFile: File | undefined;

    switch (e.target.name) {
      case "name":
        setState({ ...state, fullName: e.target.value });
        break;

      case "email":
        setState({ ...state, email: e.target.value });
        break;

      case "CV":
        if (e.target.files) selectedFile = e.target.files[0];
        handleFile(selectedFile, e.target.name);
        break;

      case "letter":
        if (e.target.files) selectedFile = e.target.files[0];
        handleFile(selectedFile, e.target.name);
        break;
      default:
        return;
    }
  };

  const handleFile = (file: File | undefined, name: string) => {
    let reader = new FileReader();

    if (file && file.type === "application/pdf") {
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        if (e.target?.result && name === "CV") {
          setState({
            ...state,
            CVPDF: e.target?.result,
            fileName1: file.name,
          });
        } else if (e.target?.result && name === "letter") {
          setState({
            ...state,
            letterPDF: e.target?.result,
            fileName2: file.name,
          });
        }
      };
    } else if (file && file.type === "image/jpeg") {
      let imgFile = URL.createObjectURL(file);
      if (name === "CV")
        setState({ ...state, CVImage: imgFile, fileName1: file.name });
      else {
        setState({ ...state, letterImage: imgFile, fileName2: file.name });
      }
    }
  };

  const cropFileName = (name: string) => {
    let short: string = "";
    let dataType: string = "";
    if (name.length > 10) {
      short = name.slice(0, 10);
      dataType = name.split(".")[1];
    } else return name;
    return short.concat(`.${dataType}...`);
  };

  return (
    <ContactStyled id="contact">
      <div className={`contact-btn ${slideFlag && "contact-slide"}`}>
        <button onClick={() => setSlideFlag(true)}>Contact Us</button>
      </div>
      <div className="wrapper">
        {/**when form is filled and submited this will be slided from the left */}

        {modalFlag && (
          <div className="wrapper-display">
            <div
              className="modal"
              onClick={(e) => {
                setModalFlag(false);
                handleNav();
              }}
            ></div>
            <div className="data-display">
              <div className="info">
                <h2>Submit preview</h2>
                <h3>Full Name: {stateForm.fullName}</h3>
                <h3>Email: {stateForm.email}</h3>
              </div>
              <div className="imgs">
                <div className="cv-pdf">
                  <div className="pdf">
                    {stateForm.CVPDF && (
                      <div>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                          <Viewer fileUrl={stateForm.CVPDF as string} />
                        </Worker>
                      </div>
                    )}
                  </div>
                  <div className="img">
                    {/* <img src={stateForm.CV?.toString()} alt="CV" /> */}
                    {stateForm.CVImage && (
                      <img src={stateForm.CVImage} alt="CV" />
                    )}
                  </div>
                </div>
                <div className="letter-pdf">
                  <div className="pdf">
                    {stateForm.letterPDF && (
                      <>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                          <Viewer fileUrl={stateForm.letterPDF as string} />
                        </Worker>
                      </>
                    )}
                  </div>
                  <div className="img">
                    {/* <img src={stateForm.CV?.toString()} alt="CV" /> */}
                    {stateForm.letterImage && (
                      <img src={stateForm.letterImage} alt="letter" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {navVisible && (
          <div className="form">
            <h2>Contact Us</h2>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <div className="control">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={state.fullName}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="label">
                  Full name:
                </label>
              </div>
              <div className="control">
                <input
                  type="email"
                  id="email"
                  name="email"
                  maxLength={30}
                  value={state.email}
                  required
                  onChange={handleChange}
                />
                <label htmlFor="email" className="label">
                  Email:
                </label>
              </div>

              <div className="control">
                <label htmlFor="CV" title={state.fileName1}>{`${
                  state.fileName1
                    ? cropFileName(state.fileName1)
                    : "Add CV .pdf/.jpeg"
                }`}</label>
                <input
                  type="file"
                  id="CV"
                  name="CV"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="control">
                <label htmlFor="letter" title={state.fileName2}>{`${
                  state.fileName2
                    ? cropFileName(state.fileName2)
                    : "Add Cover Letter .pdf/.jpeg"
                }`}</label>
                <input
                  type="file"
                  id="letter"
                  name="letter"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </ContactStyled>
  );
};

export default Contact;

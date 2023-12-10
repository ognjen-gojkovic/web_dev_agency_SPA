import React from "react";
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
  const cvRef = React.useRef<HTMLInputElement | null>(null);
  const letterRef = React.useRef<HTMLInputElement | null>(null);
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
  const [errorMessageFlag, setErrorMessageFlag] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if any of files is missing don't submit
    if (
      (!state.CVPDF && !state.CVImage && !state.fileName1) ||
      (!state.letterPDF && !state.letterImage && !state.fileName2)
    ) {
      alert("Please add CV/Letter before submitting.");

      return;
    }
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

  React.useEffect(() => {
    const timeoutIndex = setTimeout(() => {
      setErrorMessageFlag(false);
    }, 2000);

    return () => clearTimeout(timeoutIndex);
  }, [errorMessageFlag]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "name":
        setState({ ...state, fullName: e.target.value });
        break;

      case "email":
        setState({ ...state, email: e.target.value });
        cvRef.current?.focus();
        break;

      case "CV":
        handleFile(e);
        letterRef.current?.focus();
        break;

      case "letter":
        handleFile(e);
        break;
      default:
        return;
    }
  };

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    let acceptedTypes: string[] = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "application/pdf",
    ];

    let file: File | null = null;

    if (event.target.files) {
      file = event.target.files[0];
    }

    // handle error for no file or invalid format
    if (
      !event.target.files ||
      !acceptedTypes.includes(event.target.files[0].type)
    ) {
      setErrorMessageFlag(true);
      setState({
        ...state,
        CVPDF: null,
        fileName1: "",
        letterPDF: null,
        fileName2: "",
      });
      return;
    }

    if (file && file.type === "application/pdf") {
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        if (e.target?.result && event.target.name === "CV" && file) {
          setState({
            ...state,
            CVPDF: e.target?.result,
            fileName1: file.name,
          });
        } else if (e.target?.result && event.target.name === "letter" && file) {
          setState({
            ...state,
            letterPDF: e.target?.result,
            fileName2: file.name,
          });
        }
      };
    } else if (
      (file && file.type === "image/jpeg") ||
      (file && file.type === "image/png") ||
      (file && file.type === "image/jpg")
    ) {
      let imgFile = URL.createObjectURL(file);
      if (event.target.name === "CV")
        setState({ ...state, CVImage: imgFile, fileName1: file.name });
      else {
        setState({ ...state, letterImage: imgFile, fileName2: file.name });
      }
    }
  };

  const cropFileName = (name: string): string => {
    let short: string = "";
    let dataType: string = "";
    if (name.length > 10) {
      short = name.slice(0, 10);
      dataType = name.split(".")[1];
    } else return name;
    return short.concat(`.${dataType}...`);
  };

  const handleError = (
    e: React.FormEvent<HTMLInputElement>,
    inputName: string
  ) => {
    let temp = e.currentTarget.classList;

    if (inputName === e.currentTarget.name) temp.add("error");

    const timeoutIndex = setTimeout(() => {
      temp.remove("error");
    }, 2000);

    return () => clearTimeout(timeoutIndex);
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
            <div className={`tooltip ${errorMessageFlag && "error"}`}>
              <p>Invalid file format!</p>
              <hr />
              <ul>
                <p>Accepted fromats:</p>
                <li>.jpg</li>
                <li>.jpeg</li>
                <li>.pdf</li>
              </ul>
            </div>
            <h2>Contact Us</h2>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <div className="control">
                <input
                  type="text"
                  id="name"
                  name="name"
                  minLength={3}
                  required
                  value={state.fullName}
                  onChange={handleChange}
                  onInvalid={(e) => handleError(e, "name")}
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
                  onInvalid={(e) => handleError(e, "email")}
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
                  onChange={handleChange}
                  accept="image/jpeg, .pdf"
                  ref={cvRef}
                  //onInvalid={(e) => handleError(e)}
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
                  onChange={handleChange}
                  accept="image/jpeg, .pdf"
                  ref={letterRef}
                  //onInvalid={(e) => handleError(e)}
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

import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/images/original_icon.png";
import { useRouter } from "next/router";
//import { useAuth } from "../context/AuthContext";
import { initFirebase } from "../services/firebase";
import { auth } from "../config/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const Login = () => {
  //const router = useRouter();

  const app = initFirebase();
  //const auth = getAuth();
  console.log(app);

  const countryCode = "+57";

  //const { user, login } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [expandForm, setExpandForm] = useState(false);
  const [OTP, setOTP] = useState();

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        //size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      },
      auth
    );
  };

  const verifyPhoneNumber = async (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 12) {
      setExpandForm(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          //SMS not sent
          console.log('esto es error',error);
        });
    }
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    if (OTP.length === 6) {
    //let confirmationResult = window.confirmationResult;
    window.confirmationResult.confirm(OTP).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(result)
        console.log(user)
       /*  return { redirect: {
          destination: '/home',
          permanent: false,
        }, 
      }*/
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        console.log(error);
      });
    }
    else{
      alert("Este codigo no es valido")
    }
  };

  return (
    <div className="welcomer">
      <div className="containerPrincipal">
        <div className="containerSecundario ">
          <div className="row ">
            <div className="col ">
              <div className="mx-auto py-3">
                <Image
                  className="avatar"
                  src={logo}
                  alt="Logo Header"
                  objectFit="contain"
                  width={250}
                  height={250}
                />
              </div>
            </div>
            <div className="col">
              <h5 className="textblueMega text-center">
                Administración <br /> de Pacientes
              </h5>
              <br />
              <form onSubmit={expandForm === true ? verifyOTP: verifyPhoneNumber}>
                <div className="form-group">
                  <label>Telefono Celular:</label>
                  <br />
                  <input
                    type="phone"
                    placeholder="phoneNumber"
                    defaultValue={phoneNumber}
                    className="form-control"
                    //onChange={handleInputChange}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    name="phoneNumber"
                  />
                  <br />


                </div>
                {expandForm === true && (
                  <div className="form-group">
                    <label>Codigo enviado al celular:</label>
                    <br />
                    <input
                      defaultValue={OTP}
                      className="form-control"
                      //onChange={handleInputChange}
                      onChange={(e) => setOTP(e.target.value)}
                      name="phoneNumber"
                    />
                    <br />
                    <br />
                  </div>
                )                 
              }
                
                <div id="recaptcha-container"></div>
                <button className="btn btn-primary text-white">
                {expandForm === true ? "Validar Codigo" : "Enviar SMS"}
              </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

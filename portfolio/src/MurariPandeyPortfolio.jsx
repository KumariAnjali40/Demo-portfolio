import React from "react";
import MurariPandeyImage from "../src/Photos/MurariJi.jpeg";
import Mantra from "../src/Styles/Mantra.css";
import GaneshJi from "../src/Photos/ganeshji.jpeg";
import PujaThali from "../src/Photos/PujaThali.jpeg";
import ShadiPhoto from "../src/Photos/shadi.jpeg";
import ShivLingPhoto from "../src/Photos/shivling.jpeg";

const MurariPandeyPortfolio = () => {
  const styles = {
    container: {
      fontFamily: "Georgia, serif",
      backgroundColor: "#e87016",
      color: "#442910",
      padding: "40px 20px",
    },
    section: {
      maxWidth: "1100px",
      margin: "0 auto",
    },
    about: {
      position: "relative", // ⬅️ Required for layering
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "30px",
      marginBottom: "60px",
    },

    image: {
      width: "220px",
      height: "220px",
      objectFit: "cover",
      borderRadius: "50%",
      zIndex: 2,
      position: "relative",
    },

    mantraBackground: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "22px",
      fontWeight: "bold",
      opacity: 0.2,
      whiteSpace: "nowrap",
      zIndex: 1,
      animation: "spin 20s linear infinite",
    },
    box: {
      backgroundColor: "#f7e4c3",
      padding: "20px",
      borderRadius: "12px",
      lineHeight: "1.7",
    },
    heading: {
      fontSize: "30px",
      fontWeight: "bold",
      marginBottom: "15px",
      textAlign: "center",
    },
    services: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
      marginBottom: "60px",
    },
    serviceCard: {
      backgroundColor: "#f7e4c3",
      padding: "15px",
      borderRadius: "10px",
      textAlign: "center",
      fontWeight: "500",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    gallery: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "15px",
      marginBottom: "60px",
    },
    galleryImg: {
      width: "100%",
      borderRadius: "10px",
    },
    testimonialSection: {
      backgroundColor: "#5b3921",
      color: "white",
      padding: "40px 20px",
      borderRadius: "12px",
    },
    testimonialBox: {
      backgroundColor: "#f5d9b3",
      color: "#3f2c1f",
      borderRadius: "10px",
      padding: "20px",
      marginBottom: "20px",
    },
    galleryImg: {
      width: "100%",
      height: "180px", // Set a fixed height
      objectFit: "cover", // Ensures the image fills the box without distortion
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.section}>
        {/* About Section */}
        <div style={styles.about}>
          <h2 style={styles.heading}>About Murari Pandit Ji</h2>
          <div
            style={{ overflow: "hidden", width: "100%", position: "relative" }}
          >
            <div className="mantra-horizontal">
              ॐ नमः शिवाय ॐ नमः शिवाय ॐ नमः शिवाय ॐ नमः शिवाय ॐ नमः शिवाय ॐ नमः
              शिवाय ॐ नमः शिवाय
            </div>
          </div>

          <img src={MurariPandeyImage} alt="Pandit Ji" style={styles.image} />
          <div style={styles.box}>
            <p>
              Over 25+ years of experience in performing Hindu rituals and
              ceremonies.
            </p>
            <p>Trained in Vedic scriptures.</p>
            <p>Fluent in Sanskrit and Hindi.</p>
            <p>Served at major temples across Howrah and Kolkata.</p>
          </div>
        </div>

        {/* Services Section */}
        <h2 style={styles.heading}>Puja Services Offered</h2>
        <div style={styles.services}>
          {[
            "Griha Pravesh",
            "Satyanarayan Katha",
            "Wedding Rituals",
            "Rudrabhishek",
            "Navgraha Shanti",
            "Pitru Dosha Nivaran",
          ].map((service) => (
            <div key={service} style={styles.serviceCard}>
              {service}
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <h2 style={styles.heading}>Gallery</h2>
        <div style={styles.gallery}>
          {[GaneshJi, PujaThali, ShadiPhoto, ShivLingPhoto].map(
            (img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index + 1}`}
                style={styles.galleryImg}
              />
            )
          )}
        </div>

        {/* Testimonials Section */}
        <div style={styles.testimonialSection}>
          <h2 style={{ ...styles.heading, color: "#fff" }}>Testimonials</h2>
          <div style={styles.testimonialBox}>
            <p>
              “Pandit Ji performed our Griha Pravesh puja with utmost devotion.
              Highly recommend.”
            </p>
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>
              — Anil Kumar
            </p>
          </div>
          <div style={styles.testimonialBox}>
            <p>
              “Very knowledgeable and punctual. Made our wedding rituals
              memorable.”
            </p>
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>
              — Meena Sharma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MurariPandeyPortfolio
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions about the Placement Management System? We'd love to hear
        from you.
      </p>

      <div className="contact-card">
        <h3>Placement Cell</h3>

        <p>
          <strong>College:</strong> Chalapathi Institute of Engineering and
          Technology
        </p>

        <p>
          <strong>Email:</strong> placement@ciet.edu.in
        </p>

        <p>
          <strong>Phone:</strong> +91 9876543210
        </p>

        <p>
          <strong>Address:</strong> Guntur, Andhra Pradesh
        </p>
      </div>
    </div>
  );
}

export default Contact;
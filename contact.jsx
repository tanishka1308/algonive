export default function Contact() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Get in Touch with ALGONIVE</h1>
      <p>We’d love to hear from you — whether you're a student, mentor, or collaborator.</p>

      <section style={{ marginTop: '2rem' }}>
        <h2>Contact Info</h2>
        <p><strong>Email:</strong> <a href="mailto:services.algonivetech@gmail.com">services.algonivetech@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/company/algonive" target="_blank">linkedin.com/company/algonive</a></p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Send a Message</h2>
        <form action="mailto:services.algonivetech@gmail.com" method="POST" encType="text/plain">
          <div style={{ marginBottom: '0.5rem' }}>
            <label>Full Name:</label><br />
            <input type="text" name="name" required style={{ width: '100%' }} />
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <label>Email:</label><br />
            <input type="email" name="email" required style={{ width: '100%' }} />
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <label>Subject:</label><br />
            <input type="text" name="subject" style={{ width: '100%' }} />
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <label>Message:</label><br />
            <textarea name="message" rows="4" style={{ width: '100%' }}></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}
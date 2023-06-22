import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <>
      <Wrapper>
        <h2 className="common-heading">Contact Page</h2>
        <iframe
          title="myFrame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.8738998118374!2d77.4944914751976!3d28.7531816755991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1685159860647!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/mrgvvozd"
              method="POST"
              className="contact-inputs"
            >
              <input
                type="text"
                placeholder="username"
                name="username"
                required
                autoComplete="off"
              />
              <input
                type="email"
                placeholder="Email"
                name="Email"
                required
                autoComplete="off"
              />
              <textarea
                name="messages"
                placeholder="Enter your message"
                id=""
                cols="30"
                rows="10"
                autoComplete="off"
                required
              ></textarea>
              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </Wrapper>
      ;
    </>
  );
};

export default Contact;

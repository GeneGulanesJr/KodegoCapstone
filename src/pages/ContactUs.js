import React from 'react'
import styled from 'styled-components'
import { PageHero} from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const Custom = () => {
    return (
        <main>
            <PageHero title='Contact Us' />
            <Wrapper className='page section section-center'>
                <img src={aboutImg} alt='nice desk' />
                <article>
                    <div className='title'>
                        <h2>Contact Us</h2>
                        <div className='underline'></div>
                    </div>
                    <form className='contact-form' action="mailto:youraddr@domain.tld" method="GET">
                        <input
                            type='text'
                            className='form-input'
                            placeholder='Enter your name'
                        />
                        <br/>
                        <input
                            type='email'
                            className='form-input'
                            placeholder='enter email'
                        />
                        <br/>
                        <textarea
                            className='form-input'
                            placeholder='Enter your message'
                        ></textarea>
                        <br/>

                        <button type='submit' className='submit-btn'>
                            Send
                        </button>
                    </form>
                </article>
            </Wrapper>
        </main>
    )

}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }

  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {

    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);

  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default Custom;
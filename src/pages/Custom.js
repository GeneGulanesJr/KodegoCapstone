import React from 'react'
import styled from 'styled-components'
import {PageHero} from "../components";
import IframeResizer from 'iframe-resizer-react'
const Custom = () => {

    return (
        // <main>
        //
        //     <PageHero title='Custom Build' />
        //     <Wrapper className='page'>
        //         <div className='section-center custom-build'>
        //
        //
        //         </div>
        //     </Wrapper>
        //
        // </main>

<>
    <IframeResizer
        log
        src="https://pcbuilder-eight.vercel.app/"
        style={{ width: '1px',height: '1100px', minWidth: '100%', minHeight: '100%'}}
    />


</>
    )
}
const Wrapper = styled.div`
  .custom-build {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .custom-build {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default Custom;
import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'

// extra imports

import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import IframeResizer from "iframe-resizer-react";

const CheckoutPage = () => {
  const { cart } = useCartContext()

  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2>Your cart is empty</h2>
            <Link to='/products' className='btn'>
              fill it
            </Link>
          </div>
        ) : (
            <IframeResizer
                log
                src="https://test.dragonpay.ph/Pay.aspx?procid=BAYD&merchantid=DL4A1EUOTIC&txnid=7ACA7986-21CE-4F26-AE80C5DB34B12089&amount=124.00&ccy=PHP&description=124&email=ggulanes_180000000405%40uic.edu.ph&digest=89fbee53e18a9630c94279dfa8fdce4c5c4e8fd2&param1=180000000405&param2=124.00"
                style={{ width: '1px',height: '1100px', minWidth: '100%', minHeight: '100%'}}
            />
        )}
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`
export default CheckoutPage

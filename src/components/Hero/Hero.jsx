import React from 'react'
import Promo from './Promo'
import HowToRefer from './HowToRefer'
import ReferralBenefits from './ReferralBenefits'
import FrequentlyAsked from './FrequentlyAsked'
import Info from './Info'
const Hero = () => {
    return (
        <div>
            <Promo />
            <HowToRefer />
            <ReferralBenefits />
            <FrequentlyAsked />
            <Info />
        </div>
    )
}

export default Hero
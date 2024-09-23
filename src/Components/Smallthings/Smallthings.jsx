import React from 'react';
import dev from '../../assets/freedev.svg';
import Sec from '../../assets/secure.svg';
import Mon from '../../assets/servic.svg';
import Onl from '../../assets/onlinesupport.svg';

const Smallthings = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="Dev flex flex-col items-center text-center">
          <img src={dev} className="mb-5" alt="Fast & Free Delivery" />
          <h3 className="font-medium text-xl mb-3">Fast & Free Delivery</h3>
          <p className="text-sm">Free delivery on all orders</p>
        </div>

        <div className="Dev flex flex-col items-center text-center">
          <img src={Sec} className="mb-5" alt="Secure Payment" />
          <h3 className="font-medium text-lg mb-3">Secure Payment</h3>
          <p className="text-sm">Safe and secure transactions</p>
        </div>

        <div className="Dev flex flex-col items-center text-center">
          <img src={Mon} className="mb-5" alt="Money Back Guarantee" />
          <h3 className="font-medium text-xl mb-3">Money Back Guarantee</h3>
          <p className="text-sm">Money back guarantee on all orders</p>
        </div>

        <div className="Dev flex flex-col items-center text-center">
          <img src={Onl} className="mb-5" alt="Online Support" />
          <h3 className="font-medium text-xl mb-3">Online Support</h3>
          <p className="text-sm">24/7 online support</p>
        </div>
      </div>
    </div>
  );
};

export default Smallthings;

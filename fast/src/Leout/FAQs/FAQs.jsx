const FAQs = () => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-center mt-4 mb-10"> FAQs</h1>
      <div className="flex flex-col gap-1">
        <div className="collapse bg-base-200 ">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          How can I order
          </div>
          <div className="collapse-content">
            <p>You can order easily using our online platform. When you find a product you need, you can add it to cart, login and go through the ordering process. After the order is ready, you will receive order summary to your email. Order summary will also be stored to your account.</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
          Why should I buy online?
          </div>
          <div className="collapse-content">
            <p>Speeding up the process. By ordering online you will you will get prices faster and you will be able to go through order confirmation and payment process much faster. This could save days of your time.</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
          What information should I input when ordering?
          </div>
          <div className="collapse-content">
            <p>our online ordering system will ask for all the important information you should submit. If you have a VAT number, please remember to submit it. This will make sure the shipment is not delayed because of the lack of VAT number</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
          Is VAT charged?
          </div>
          <div className="collapse-content">
            <p>If you have VAT number, then VAT is not charged. You need to remember to add the VAT number to your account information section. Online checkout system will automatically fill in the submitted VAT number when you order products.
            You can also add your VAT number during the checkout process manually.r</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
          What payment methods can I use?
          </div>
          <div className="collapse-content">
            <p>You can use all the major credit cards.

If you are a customer with established customer relationship with HyTest Ltd. you are able to use invoice as a payment method on our online shopping checkout process.  If invoicing option is not activated for you although you are repeated customer, please contact hytest@hytest.fi and notify us.</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
          Can I use pro-forma invoice?
          </div>
          <div className="collapse-content">
            <p> Yes, you can use pro-forma invoice. Please contact hytest@hytest.fi if you want to use pro-forma invoice.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

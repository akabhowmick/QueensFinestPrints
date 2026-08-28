import { useEffect } from "react";
import { DISPATCH_ACTION, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({
  amount,
  currency,
  showSpinner,
  setPaymentSuccess,
}: {
  amount: number;
  currency: string;
  showSpinner: boolean;
  setPaymentSuccess: (value: boolean) => void;
}) => {

  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: DISPATCH_ACTION.RESET_OPTIONS,
      value: {
        ...options,
        currency: currency,
      },
    });
    // dispatch is stable; options intentionally excluded — it's re-derived by this
    // same dispatch, so including it would re-trigger the effect in a loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={{ layout: "horizontal" }}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={async (_data, actions) => {
          const orderId = await actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: currency,
                  value: amount.toString(),
                },
              },
            ],
          });
          return orderId;
        }}
        onApprove={async function (data, actions) {
          await actions.order?.capture();
          if (data) {
            setPaymentSuccess(true);
          }
        }}
      />
    </>
  );
};

export default ButtonWrapper;

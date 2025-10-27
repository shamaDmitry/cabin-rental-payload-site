import React from "react";
import Container from "@/components/core/Container";
import { Card, CardContent } from "@/components/ui/card";
import OrderCallForm from "@/components/homepage/OrderForm";
import Headline from "../core/Headline";

const OrderBanner = () => {
  return (
    <section
      className="min-h-[320px] py-[140px]"
      style={{
        background:
          "url('https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00b63c032b4e0023acecff?nowebp') 45.31% 26.32% / cover no-repeat, rgb(89, 150, 115)",
      }}
    >
      <Container>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-start-2 max-w-md ml-auto">
            <Card className="p-14 px-10">
              <CardContent className="text-center p-0">
                <Headline level={3} className="mb-3">
                  Yosemite Vacation Cabin Rental
                </Headline>

                <p className="md:max-w-11/12 mx-auto mb-5 text-foreground/60">
                  Plan your next vacation and enjoy the nature around you!
                </p>

                <OrderCallForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OrderBanner;

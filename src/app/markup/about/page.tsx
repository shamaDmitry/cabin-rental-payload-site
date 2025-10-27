import AboutCard from "@/components/about/AboutCard";
import Container from "@/components/core/Container";
import Headline from "@/components/core/Headline";
import List from "@/components/List";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import AboutForm from "@/components/about/AboutForm";

const AboutPage = () => {
  return (
    <>
      <section
        className="py-20"
        style={{
          background: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00faf8525dfe002370a5bb?nowebp")`,
        }}
      >
        <Container className="text-center">
          <Image
            src="https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00ca6c0e8de1002387c720_optimized_1521_c1396x930-90x30.webp"
            alt=""
            width={1000}
            height={500}
            className="w-full rounded-lg mb-5 max-w-6xl mx-auto"
          />

          <Headline level={2} className="mb-8">
            About Yosemite
          </Headline>

          <p className="text-lg mb-8">
            Yosemite National Park in picturesque Mariposa County invites you to
            explore this magnificent park in any season.
          </p>

          <p>
            We offer numerous things to do and view, such as aspiring granite
            rocks, thrilling waterfalls, and meadows. No matter it’s your
            first-time visit to Yosemite National Park or you’re a regular
            guest, be sure you’ll always find something unique here. Rent any of
            our cabins and enjoy your stay!
          </p>
        </Container>
      </section>

      <section
        className="py-[120px]"
        style={{
          background: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d010336d6148d00231fdb7a?nowebp")`,
        }}
      >
        <Container className="text-center text-background">
          <p className="mb-12">
            We have a children&apos;s playground with a number of swings and
            slides. Our spacious terrain is for you to relax in the outdoors.
            You don&apos;t need to take food with you, as we offer a shop with
            the freshest local produce including bakery and butchery. Our cafe
            is open 7 days a week from 9:30 for our famous free breakfasts, and
            a diverse menu of lunches. Additionally, we offer a variety of
            cabins for you to choose from. Here are some of them:
          </p>

          <div className="grid grid-cols-3 gap-8">
            {Array(6)
              .fill(0)
              .map((_, index) => {
                return (
                  <AboutCard
                    key={index}
                    imageSrc="https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00a99c378c090023b0f166_optimized_1396.webp"
                    headline="Horse Ranch Cottage"
                    description="This private cottage is located within the Horse Ranch
                        with a spacious fenced area. Explore a lot of tree-lined
                        trails, see ranch animals and spectacular views."
                  />
                );
              })}
          </div>
        </Container>
      </section>

      <section
        className="py-20"
        style={{
          background: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00faf8525dfe002370a5bb?nowebp")`,
        }}
      >
        <Container>
          <Headline className="mb-8 text-center" level={2}>
            Season Activities
          </Headline>

          <div className="grid md:grid-cols-2 gap-8">
            <figure className="rounded-xl overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00b2c8032b4e0023aceb9b_optimized_1563.webp"
                alt="Winter Vacation in Yosemite National Park"
                width={1000}
                height={500}
              />
            </figure>

            <div>
              <Headline level={3} className="mb-5">
                Winter Vacation in Yosemite National Park
              </Headline>

              <p className="mb-5">
                Visit our park in winter and celebrate Christmas and New Year
                holidays with us. You and all your family members will be
                impressed with a variety of breathtaking adventures and winter
                activities we have to offer.
              </p>

              <List
                data={[
                  { id: uuidv4(), content: "Snowmobile riding" },
                  { id: uuidv4(), content: "Snowboarding" },
                  { id: uuidv4(), content: "Snow-shoeing" },
                  { id: uuidv4(), content: "Skating" },
                  { id: uuidv4(), content: "Skiing" },
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Headline level={3} className="mb-5">
                Summer Vacation in Yosemite National Park
              </Headline>

              <p className="mb-5">
                Whatever the season, Yosemite National Park has a wide range of
                activities for you to choose from. Visit us in summer and enjoy
                your vacation!
              </p>

              <List
                data={[
                  { id: uuidv4(), content: "Horseback riding" },
                  { id: uuidv4(), content: "Rock climbing" },
                  { id: uuidv4(), content: "Biking" },
                  { id: uuidv4(), content: "Cycling" },
                  { id: uuidv4(), content: "Fishing" },
                  { id: uuidv4(), content: "Hiking" },
                  { id: uuidv4(), content: "Rafting" },
                  { id: uuidv4(), content: "Golf" },
                  { id: uuidv4(), content: "Camping" },
                  { id: uuidv4(), content: "Guided tours" },
                ]}
              />
            </div>

            <figure className="rounded-xl overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00b615378c090023b101eb_optimized_1395_c1395x931-0x0.webp"
                alt="Summer Vacation in Yosemite National Park"
                width={1000}
                height={500}
              />
            </figure>
          </div>
        </Container>
      </section>

      <section
        className="py-20"
        style={{
          background: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00faf8525dfe002370a5bb?nowebp")`,
        }}
      >
        <Container className="text-center">
          <Headline level={2} className="mb-1">
            SPA Vacations
          </Headline>

          <p className="mb-12">
            Our bespoke spa vacations offer something unique for everyone in our
            spa center. Improve your well-being by paying special attention to
            our specialized spa procedures, yoga classes, Ayurveda, weight loss
            program, and fitness classes. Supplement your daily wellness with
            healthy cuisine for optimal health and wellness.
          </p>

          <figure className="rounded-lg overflow-hidden">
            <Image
              className="w-full max-h-[380px] object-cover"
              src={
                "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00b783f7675700234bed20_optimized_1400_c1400x927-0x0.webp"
              }
              alt="Spa Vacation in Yosemite National Park"
              width={1000}
              height={380}
            />
          </figure>
        </Container>
      </section>

      <section className="py-20 relative">
        <div
          className="absolute size-full bg-cover left-0 top-0 -z-10 bg-fixed filter contrast-[160%] bg-center"
          style={{
            backgroundImage: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5cfe6b435da05700239a0c2b?nowebp")`,
          }}
        />
        <div className="bg-[#272121b3] absolute left-0 top-0 bottom-0 right-0 -z-10" />

        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-background">
              <Headline className="mb-8">Any questions?</Headline>

              <p className="text-lg">
                Complete the form and our manager will contact you as soon as
                possible.
              </p>
            </div>

            <div className="bg-[#282520cc] py-10 px-8">
              <AboutForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;

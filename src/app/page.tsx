import CellPhone from "../components/cellphone";

export default function Home() {
  return (
    <main className="min-h-screen w-full text-base bg-light-grayish-violet lg:flex">
      <div></div>
      <div></div>
      <section className="pt-28 lg:w-[50%]">
        <CellPhone />
      </section>
      <section className="lg:w-[50%]">
        <div className="py-[5%] flex flex-col items-center lg:justify-center lg:h-full lg:w-full lg:items-start">
          <h1 className="font-bold text-very-dark-desaturated-violet text-4xl mb-5 lg:text-5xl">Simple booking</h1>
          <p className="max-w-[30ch] lg:max-w-[45ch] text-lg text-center lg:text-left text-dark-grayish-violet">
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
      </section> 
    </main>
  );
}

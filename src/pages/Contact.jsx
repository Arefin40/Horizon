const ContactCard = ({ contact }) => {
   return (
      <div
         data-aos="fade-up"
         data-aos-anchor-placement="top-bottom"
         className="rounded-2xl bg-gray-50 p-10"
      >
         <h1 className="text-base font-semibold leading-7 text-gray-800">
            {contact.title}
         </h1>
         <div className="mt-3 text-sm leading-6">
            <p className="font-semibold text-primary-500">{contact.email}</p>
            <p className="mt-1">{contact.phone}</p>
         </div>
      </div>
   );
};

export default () => {
   document.title = "Horizon  |  Contact us";

   const contacts = [
      {
         title: "Collaborate",
         email: "collaborate@horizon.com",
         phone: "+88 (013) 516-3582",
      },
      {
         title: "Press",
         email: "press@horizon.com",
         phone: "+88 (015) 516-3584",
      },
      {
         title: "Join our team",
         email: "careers@horizon.com",
         phone: "+88 (016) 516-3586",
      },
      {
         title: "Say hello",
         email: "hello@horizon.com",
         phone: "+88 (018) 516-3588",
      },
   ];

   return (
      <section className="mt-12 mx-auto max-w-7xl">
         <div className="grid lg:grid-cols-3 gap-x-10 gap-y-8">
            <div>
               <h2 className="text-3xl font-bold text-gray-800 text-center lg:text-left">
                  Get in touch
               </h2>
               <p className="mt-4 leading-7 text-center lg:text-left">
                  Connect with Us for Inquiries. Reach out to our team at your
                  convenience.
               </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
               {contacts.map((contact) => (
                  <ContactCard key={contact.title} contact={contact} />
               ))}
            </div>
         </div>
      </section>
   );
};

import React from "react";
const products = [
  {
    id: 1,
    name: "Netflix Clone",
    href: "#",
    price: "",
    imageSrc:
      "https://images.pexels.com/photos/5852131/pexels-photo-5852131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Currency Convertor",
    href: "#",
    price: "",
    imageSrc:
      "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Mamba AI",
    href: "#",
    price: "",
    imageSrc:
      "https://images.pexels.com/photos/15863066/pexels-photo-15863066/free-photo-of-openai-website-with-introduction-to-chatgpt-on-computer-monitor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Learning Project",
    href: "#",
    price: "",
    imageSrc:
      "https://images.pexels.com/photos/17484901/pexels-photo-17484901/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-boundaries-set-in-place-to-secure-safe-accountable-biotechnology-it-was-created-by-artist-khyati-treha.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Nomad Tumbler",
    href: "#",
    price: "",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 6,
    name: "Focus Paper Refill",
    href: "#",
    price: "",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 7,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];
const Project = () => {
  return (
    <>
      <div className="p-0.5 m-12">
          <div className="mx-auto max-w-2xl sm:px-2 lg:max-w-7xl lg:px-8">
            <h2 className="text-6xl md:text-7xl font-bold 
            mb-5 text-white text-center p-12">
            What We <span className="text-orange-500">Have...</span>
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <>
                  <div className="border rounded-lg p-4 bg-white">
                    <a key={product.id} href={product.href} className="group">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img
                          alt={product.imageAlt}
                          src={product.imageSrc}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <h3 className="mt-4 text-sm text-black text-center font-bold">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-lg font-medium text-black">
                        {product.price}
                      </p>
                    </a>
                  </div>
                </>
              ))}
            </div>
          </div>
      </div>
    </>
  );
};

export default Project;

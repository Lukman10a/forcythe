import Image from "next/image";
import AnimatedBorderTrail from "./ui/animated/borderTrail";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Experience",
      description:
        "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
    },
    {
      title: "Quick Support",
      description:
        "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
    },
    {
      title: "Cost Savings",
      description:
        "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
    },
  ];

  // Animation Variants for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2, // Stagger the appearance of each card
        duration: 0.5,
      },
    }),
    hover: {
      scale: 1.05, // Slightly zoom the card on hover
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section className="bg-[#102444] py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-1 gap-8 place-items-center overflow-hidden">
          {features.map((feature, index) => (
            <AnimatedBorderTrail key={index}>
              <motion.div
                className="h-full lg:mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                custom={index}
                whileHover="hover"
              >
                <div className="text-white bg-[#080414] p-10 space-y-6 ">
                  <Image
                    className="w-14"
                    src="/assets/svg/layers-three.svg"
                    alt="Layered Three"
                    width={20}
                    height={20}
                  />
                  <h4 className="text-3xl">{feature.title}</h4>
                  <p className="text-lg">{feature.description}</p>
                </div>
              </motion.div>
            </AnimatedBorderTrail>
          ))}
        </div>
      </div>
    </section>
  );
}

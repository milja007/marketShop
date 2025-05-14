"use client";
import { createUser } from "@/server/users"; // Assuming this path is correct
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsers } from "@/client/userss"; // Assuming this path is correct
import MaxWidthWrapper from "@/components/MaxWidthWrapper"; // Assuming this path is correct
import Image from "next/image";
import hero1 from "@/public/HOME/Hero/hero11.jpg"; // Or hero1.jpg
import hero2 from "@/public/HOME/Hero/hero2.jpg";
import hero3 from "@/public/HOME/Hero/hero3.jpg";
import svg1 from "@/public/HOME/Hero/SvgHero/1.svg";
import svg2 from "@/public/HOME/Hero/SvgHero/2.svg";
import svg3 from "@/public/HOME/Hero/SvgHero/3.svg";
import svg4 from "@/public/HOME/Hero/SvgHero/4.svg";
// Mock implementations for missing imports if they are not crucial for the UI structure
// const MaxWidthWrapper = ({ className, children }) => <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
// const getUsers = async () => {
//   await new Promise(resolve => setTimeout(resolve, 500));
//   return [{ id: 101, name: "Existing User 1" }];
// };
// const createUser = async (newUser) => {
//   await new Promise(resolve => setTimeout(resolve, 500));
//   console.log("User created:", newUser);
//   return { ...newUser, message: "User created successfully" };
// };

interface dataType {
  id: number;
  name: string;
}

export default function Home() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["todos"],
    queryFn: getUsers,
  });

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log("Mutation successful:", data);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

  const commonButtonClasses =
    "self-start bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-2 px-4 sm:py-2 sm:px-5 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300 text-sm sm:text-base";

  const cardData = [
    {
      id: "hero1",
      title: "Grow Lights",
      src: hero1,
      alt: "Grow lights illuminating plants",
      priority: true,
      aspectRatio: "aspect-video lg:aspect-[4/5]", // Example: Different aspect ratio on lg for the main image
    },
    {
      id: "hero2",
      title: "Grow Tents",
      src: hero2,
      alt: "Inside of a grow tent with plants",
      priority: false,
      aspectRatio: "aspect-video", // Standard 16:9
    },
    {
      id: "hero3",
      title: "Grow Kits",
      src: hero3,
      alt: "A complete grow kit with various components",
      priority: false,
      aspectRatio: "aspect-video", // Standard 16:9
    },
  ];

  return (
    <div className="bg-slate-100 min-h-screen font-sans">
      <section className="container mx-auto px-4 pt-12 pb-8 md:pt-16 md:pb-10">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900">
          The Best Growing{" "}
          <span className="block sm:inline bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 sm:py-1 rounded-lg shadow-lg mt-2 sm:mt-0 mx-1">
            Equipment
          </span>{" "}
          <br className="hidden sm:block lg:hidden" />
          in One Place!
        </h1>
      </section>

      <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:pt-12 xl:pt-16 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Column 1: Main Hero Image (Grow Lights) */}
          <div
            className={`rounded-xl shadow-xl hover:shadow-2xl focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-100 transition-all duration-300 overflow-hidden relative group ${cardData[0].aspectRatio}`}
          >
            <Image
              src={cardData[0].src}
              alt={cardData[0].alt}
              layout="fill"
              objectFit="cover"
              className="transform group-hover:scale-105 transition-transform duration-300"
              priority={cardData[0].priority}
            />
            <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/85 transition-colors duration-300">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg leading-tight mb-3 sm:mb-4">
                {cardData[0].title}
              </h2>
              <button
                onClick={() => alert(`View More: ${cardData[0].title}`)}
                className={commonButtonClasses}
              >
                View More
              </button>
            </div>
          </div>

          {/* Column 2: Secondary Hero Images (Grow Tents & Grow Kits) */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            {[cardData[1], cardData[2]].map((card) => (
              <div
                key={card.id}
                className={`rounded-xl shadow-xl hover:shadow-2xl focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-100 transition-all duration-300 overflow-hidden relative group ${card.aspectRatio}`}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-105 transition-transform duration-300"
                  priority={card.priority}
                />
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/85 transition-colors duration-300">
                  <h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg leading-tight mb-2 sm:mb-3">
                    {card.title}
                  </h2>
                  <button
                    onClick={() => alert(`View More: ${card.title}`)}
                    className={commonButtonClasses}
                  >
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User creation button and list section */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-300 text-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-lg mb-6 disabled:opacity-50"
            onClick={() => {
              const newUserName = `User ${Date.now().toString().slice(-5)}`;
              mutation.mutate({ id: Date.now(), name: newUserName });
            }}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Creating User..." : "Create User (Demo)"}
          </button>
          <div className="space-y-3 max-w-md mx-auto">
            {query.isLoading && (
              <div className="text-gray-600">Loading users...</div>
            )}
            {query.isError && (
              <div className="text-red-600">
                Error loading users. Please try again.
              </div>
            )}
            {query.data?.length === 0 && !query.isLoading && (
              <div className="text-gray-500">No users found.</div>
            )}
            {query.data?.map((user: dataType) => (
              <div
                key={user.id}
                className="p-4 bg-white rounded-lg shadow text-gray-700 border border-gray-200"
              >
                {user.name} (ID: {user.id})
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

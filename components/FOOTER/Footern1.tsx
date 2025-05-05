import Image from "next/image";
import Link from "next/link";
import autof from "@/assets/autof.webp";

const Footern1 = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {/* Logo cell */}
        <div>
          <Image
            src={autof}
            alt="Company logo"
            width={200}
            height={100}
            className="w-32 h-auto ml-14"
            priority
          />
        </div>

        {/* Customer support cell */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">Customer support</h3>
          <p>tel: 2002020</p>
          <p>mail: bornna@gg</p>
          <p>whatsapp: dwedwe</p>
        </div>

        {/* Reviews & Social wrapper: spans both columns and centers its content */}
        <div className="col-span-2 grid grid-cols-1 justify-items-center items-start space-y-8 text-center lg:grid-cols-2 lg:gap-5">
          {/* Reviews cell */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Reviews</h3>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex space-x-4">
                <Image
                  src={autof}
                  alt="Review snapshot"
                  width={80}
                  height={80}
                  className="w-20 h-auto rounded"
                  priority
                />
                <p className="mt-8 lg:mt-0 ">
                  wij scoren een 9,5{" "}
                  <Link href="" className="text-blue-600 underline ">
                    Web review
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Social media cell */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Follow us on social media</h2>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-700 text-white rounded">
                Facebook
              </button>
              <button className="px-4 py-2 bg-pink-500 text-white rounded">
                Instagram
              </button>
            </div>
            <Link href="/" className="text-sm text-gray-700 underline">
              Sign up for our newsletter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footern1;

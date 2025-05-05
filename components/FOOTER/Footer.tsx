"use client";
import Image from "next/image";
import Link from "next/link";
import autof from "@/assets/autof.webp";

const Footer = () => {
  return (
    <footer>
      <div className=" cointainer">
        <div className=" child">
          <Image
            src={autof}
            alt="Company logo"
            width={200}
            height={100}
            className="w-32 h-auto"
            priority
          ></Image>
        </div>

        <div className=" child">
          <div>
            <h3> Customer support</h3>
            <p>tel:2002020</p>
            <p>mail:bornna@gg</p>
            <p>whatsapp:dwedwed</p>
          </div>
        </div>

        <div className=" child">
          <div className="mini ">
            <h3>Reviews</h3>
          </div>
          <div className="mini ">
            <Image
              src={autof}
              alt="Company logo"
              width={200}
              height={100}
              className="w-32 h-auto"
              priority
            ></Image>
            <p>
              wij scoren een 9,5 <Link href="">Web review</Link>
            </p>
          </div>
        </div>
        <div className=" child">
          <h2>Follow us on social media</h2>
          <div className="mini">
            <button>fcb</button>
            <button>insta</button>
          </div>
          <Link href="/">Sign up for our newslatter</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

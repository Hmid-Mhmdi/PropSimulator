import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-right">
            <h3 className="text-lg font-bold mb-4">اطلاعات شرکت</h3>
            <p> ایمیل : info@example.com</p>
            <p>تلفن: ٧٨٩٠-٤٥٦ (١٢٣) ١+</p>
            <p>ادرس : پردیسان سیتی فلکه شهرداری استقلال</p>
          </div>
          <div className="text-right">
            <h3 className="text-lg font-bold mb-4"> لینک های پر تکرار</h3>
            <ul>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  خانه
                </Link>
              </li>
              <li>
                <Link href="/#banner" className="hover:text-gray-300">
                  محصولات
                </Link>
              </li>
              <li>
                <Link href="/rules" className="hover:text-gray-300">
                  قوانین
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-gray-300">
                  درباره ما
                </Link>
              </li>

              <li>
                <Link href="/contact-us" className="hover:text-gray-300">
                  ارتباط با ما
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-right">
            <h3 className="text-lg font-bold mb-4">شبیه ساز پراپ</h3>
            <p>
              ما کمکت میکنیم بتونی هوشمندانه کار کنی تا راحت پراپ پاس کنی و به
              سود برسی
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

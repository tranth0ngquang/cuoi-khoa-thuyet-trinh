"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import LogoZahaSvg from "../../pages/TrangChu/Layout/LogoZahaSvg";

export function FooterComponent() {
  return (
    <footer id="footer">
      {/* Footer tầng 1 */}
      <div
        className="bg-center bg-cover"
        style={{ backgroundImage: "url(/img/footer1.png)", height: 500 }}
      >
        <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
          <div className="flex flex-wrap justify-center items-center pt-12">

            <div className="relative">
              <div className="absolute bottom-0 -translate-x-32 translate-y-5">
                <img src="/img/footerPhone.png" alt="" className="h-0 lg:h-96" />
              </div>

              <div className="">
                <div className="relative h-0 lg:h-80">
                  <img src="/img/footerPhone2.png" alt="" className="absolute" />

                  <video autoPlay loop muted src="/img/footerVideo.mp4" type="video/mp4"
                    className="h-full rounded-3xl border border-black">
                  </video>
                </div>
              </div>
            </div>

            <div className="pl-0 lg:pl-8">
              <h3 className="text-center text-white font-bold text-3xl uppercase">
                Luôn được cập nhật
              </h3>
              <h3 className="pt-2 pb-4 text-center text-white font-bold text-xl">
                Về các lời khuyên du lịch, đề xuất và khuyến mãi mới nhất.
              </h3>

              <div className="relative">
                <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <i class="fa-solid fa-envelope text-cyan-500 text-lg"></i>
                </div>

                <input type="email" id="default-email" placeholder="Địa chỉ email của bạn..." required
                  className="block w-full p-4 ps-10 text-sm border rounded-full bg-cyan-950/90 border-cyan-700 placeholder-cyan-500 text-white focus:ring-cyan-500 focus:border-cyan-500"
                />
                <button type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 focus:ring-1 focus:outline-none font-medium rounded-full text-sm px-4 py-2 bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500"
                >
                  Đăng ký tin
                </button>
              </div>

              <div className="">
                <div className="flex justify-center pt-3">
                  <a href="" className="p-2">
                    <img className="border-2 border-transparent hover:border-white/90 rounded-lg duration-500"
                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f519939e72eccefffb6998f1397901b7.svg"
                      alt=""
                    />
                  </a>
                  <a href="" className="p-2">
                    <img className="border-2 border-transparent hover:border-white/90 rounded-lg duration-500"
                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/18339f1ae28fb0c49075916d11b98829.svg"
                      alt=""
                    />
                  </a>
                </div>

                <p className="text-center text-white">
                  Chuyến đi mơ ước nằm trong tầm tay bạn. Tải ứng dụng.
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Footer tầng 2 */}
      <div className="bg-cyan-950">
        <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
          <hr className="mb-6 sm:mx-auto border-cyan-800 lg:mb-8" />

          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center pr-8 footer_logoZaha">
                <LogoZahaSvg />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Hỗ trợ
                </h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <a href="#" className="NavFooter_text_a">
                      Trung tâm trợ giúp
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="NavFooter_text_a">
                      Chống phân biệt đối xử
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="NavFooter_text_a">
                      Hỗ trợ người khuyết tật
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="NavFooter_text_a">
                      Các tùy chọn hủy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="NavFooter_text_a">
                      Báo cáo lo ngại của khu dân cư
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Đón tiếp khách
                </h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <a href="#" className="NavFooter_text_a">
                      Cho thuê nhà trên Airbnb
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="NavFooter_text_a">
                      AirCover cho Chủ nhà
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="NavFooter_text_a">
                      Tài nguyên về đón tiếp khách
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="NavFooter_text_a">
                      Diễn đàn cộng đồng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="NavFooter_text_a">
                      Đón tiếp khách có trách nhiệm
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Airbnb
                </h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <a href="#" className="NavFooter_text_a">
                      Trang tin tức
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="NavFooter_text_a">
                      Tính năng mới
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="NavFooter_text_a">
                      Nhà đầu tư
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="NavFooter_text_a">
                      Liên hệ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="NavFooter_text_a">
                      Góp ý
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 sm:mx-auto border-cyan-800 lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center text-cyan-300">
              © 2024{" "}
              <a href="#" className="NavFooter_text_a">
                ZahaVietnam™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="NavFooter_text_a">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="NavFooter_text_a pl-6">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="#" className="NavFooter_text_a pl-6">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="NavFooter_text_a pl-6">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

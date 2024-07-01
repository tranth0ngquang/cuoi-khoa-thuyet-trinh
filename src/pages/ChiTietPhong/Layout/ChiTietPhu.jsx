import React from 'react'

export default function ChiTietPhu() {
    return (
        <div>
            <div className='pb-10 text-stone-700'>
                <p className="font-semibold text-2xl pb-2">Gặp gỡ Chủ nhà</p>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8'>
                    <div className=''>
                        <div className='bg-white rounded-3xl shadow-lg text-center p-8 grid grid-cols-1 lg:grid-cols-3 gap-8'>
                            <div className='col-span-2'>
                                <div className='flex justify-center pb-3'>
                                    <div className='relative'>
                                        <div className="">
                                            <img className="w-32 rounded-full" src="/img/ava1.jpg" alt />
                                        </div>

                                        <div className='absolute bottom-0 right-0'>
                                            <i class="fa-solid fa-check text-white text-lg rounded-full bg-cyan-500 px-2 py-0"></i>
                                        </div>
                                    </div>
                                </div>

                                <p className='font-semibold text-2xl pb-2'>Mathieu Lehanneur</p>
                                <p><i class="fa-solid fa-medal text-cyan-500"></i>Chủ nhà loại 1</p>
                            </div>
                            <div className='text-left text-sm'>
                                <p className='font-semibold text-2xl'>4321</p>
                                <p className='py-2'>Lượt đánh giá</p>
                                <hr />
                                <p className='font-semibold text-2xl pt-2'>4.9</p>
                                <p className='py-2'>TB lượt đánh giá</p>
                                <hr />
                                <p className='font-semibold text-2xl pt-2'>10</p>
                                <p className='py-2'>Năm kinh nghiệm</p>
                            </div>
                        </div>

                        <div className='py-6'>
                            <div className='pb-2'>
                                <i class="fa-solid fa-language pr-2"></i>
                                Nói Tiếng Anh và Tiếng Pháp
                            </div>
                            <div>
                                <i class="fa-solid fa-earth-americas pr-2"></i>
                                Sống tại Paris, Pháp
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <p className='font-semibold text-xl pb-4'>Mathieu Lehanneur là một Chủ nhà loại 1</p>
                        <p className='text-justify'>
                            Xin chào, tôi là Mika. Và tôi thích đi du lịch nhiều như bạn.
                            <br /><br />
                            Phải mất nhiều năm kinh nghiệm bán hàng trực tiếp và nhiều hoạt động của công ty khiến tôi nhận ra việc đi du lịch là một niềm đam mê. Việc tôi đắm chìm trong các nền văn hóa khác nhau đã định hình giấc mơ có hoạt động kinh doanh liên quan đến du lịch của riêng tôi. Là một du khách khao khát, tôi biết việc tìm một ngôi nhà tạm thời ở một nơi xa lạ có thể gây căng thẳng như thế nào. Tôi tin vào một dịch vụ bắt nguồn từ sự đồng cảm vì vậy tôi luôn đặt mình vào vị trí của du khách. Nhìn thấy phần còn lại của thế giới là giấc mơ suốt đời của tôi, nhưng Thành phố Cebu sẽ luôn là nhà của tôi.
                            <br /><br />
                            Nếu bạn dự định sớm đến thăm, tôi sẽ rất vui được đón tiếp bạn và cho bạn thấy cuộc sống như một người địa phương như thế nào.
                        </p>

                        <p className='font-semibold text-xl pb-4 pt-4'>Thông tin Chủ nhà</p>
                        <p>Tỉ lệ phản hồi: 100%</p>
                        <p className='pb-4'>Phản hồi trong vòng 1 giờ</p>

                        <button className='bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-8 rounded-full duration-500 mb-4'>Nhắn tin ngay cho chủ nhà</button>

                        {/* <hr className='pb-2' /> */}
                        <p className='text-sm text-cyan-500 italic'>Để bảo vệ khoản thanh toán của bạn, tuyệt đối không chuyển tiền hoặc liên lạc bên ngoài trang web hoặc ứng dụng Zaha Việt Nam.</p>

                    </div>
                </div>

                <hr className='py-4' />

                <p className="font-semibold text-2xl pb-2">Điểm nổi bật trong khu vực</p>
                <p className='text-justify'>
                    Ẩn mình ở đỉnh Balamban, Cebu, Grey Rock Villa là một thiên đường yên tĩnh trong Cảnh quan được bảo vệ Cebu, rõ ràng trong vẻ đẹp ngoạn mục của nó. Khi bạn leo lên núi, tầm nhìn toàn cảnh của cảnh quan nông thôn mở ra, mang đến một lối thoát thanh bình khỏi sự hỗn loạn của cuộc sống đô thị. Một trong những đặc điểm nổi bật của Grey Rock Villa là không khí mát mẻ trên núi, cung cấp thời gian nghỉ ngơi khỏi cái nóng. Bầu không khí mát mẻ, sắc nét khuyến khích sự yên tĩnh và kết nối chặt chẽ với sự lộng lẫy của thiên nhiên.
                </p>
            </div>
            <hr />
            <div className="bg-center bg-cover text-stone-700 text-center" style={{ backgroundImage: "url(/img/HuyHieu.png)", height: 700 }}>
                <p className="text-6xl pt-10 pb-2 font-bold">Huy hiệu</p>
                <p>Cho homestay được yêu thích</p>
                <p>Đem đến những trải nghiệm đầy khác biệt cho khách hàng</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10 text-stone-700 text-center'>
                <div>
                    <i class="fa-solid fa-envelope text-4xl"></i>
                    <p className='font-semibold text-2xl pb-2'>Yêu cầu đặt phòng</p>
                    <p className='text-justify font-light'>
                        Chọn ngày mong muốn, thêm khách, sau đó trả lời câu hỏi về lý do bạn muốn đi.
                    </p>
                </div>
                <div>
                    <i class="fa-solid fa-clipboard-check text-4xl"></i>
                    <p className='font-semibold text-2xl pb-2'>Quy trình lựa chọn</p>
                    <p className='text-justify font-light'>
                        Trước tiên, chúng tôi sẽ chọn ngẫu nhiên một nhóm khách tiềm năng. Tiếp theo, chúng tôi sẽ xem xét câu trả lời của nhóm khách này để rút ra những quan điểm và cảm nhận riêng của họ về nơi ở biểu tượng. Sau đó, chúng tôi sẽ mời những khách được chọn đặt phòng.
                    </p>
                </div>
                <div>
                    <i class="fa-solid fa-envelope-open-text text-4xl"></i>
                    <p className='font-semibold text-2xl pb-2'>Yêu cầu cần đáp ứng</p>
                    <p className='text-justify font-light'>
                        Để tham gia, bạn phải có tài khoản Airbnb đang hoạt động và đã tải ứng dụng; đồng thời, bạn phải là cư dân của một quốc gia hoặc khu vực hợp lệ. Việc gửi yêu cầu là hoàn toàn miễn phí.
                    </p>
                </div>
            </div>

        </div>
    )
}

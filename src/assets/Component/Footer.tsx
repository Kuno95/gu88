function Footer() {
    return (
        <>  <div className="bg-[#212529] h-[50px]">
                <div className="flex items-center justify-between mx-2 text-xs text-white h-[50px]">
                    <div className="flex flex-col items-center justify-center font-light">
                        <img src="/src/assets/Image/Icon-Footer/icons8-home-32.png" width={20} alt="" />
                        <p>Trang Chủ</p>
                    </div>
                    <div className="flex flex-col items-center justify-center font-light">
                        <img src="/src/assets/Image/Icon-Footer/icons8-gift-2.png" width={20} alt="" />
                        <p>Khuyến Mãi</p>
                    </div>
                    <div className="flex flex-col items-center justify-center font-light mb-5">
                        <img className="bg-orange-500 w-10 rounded-full" src="/src/assets/Image/Icon-Footer/dollar.png" width={20} alt="" />
                        <p>Nạp Tiền</p>
                    </div>
                    <div className="flex flex-col items-center justify-center font-light">
                        <img src="/src/assets/Image/Icon-Footer/icons8-call-support-53.png" width={20} alt="" />
                        <p>Liên Hệ</p>
                    </div>
                    <div className="flex flex-col items-center justify-center font-light">
                        <img src="/src/assets/Image/Icon-Footer/icons8-user-64.png" width={20} alt="" />
                        <p>Tài Khoản</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
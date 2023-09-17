function Header() {
    return (
        <>
            <div className='flex items-center justify-between mx-1'>
            <div>
                <img src="src/assets/Image/logogu88bet.png" alt="" width={75}/>
            </div>
            <div className='flex gap-2 mr-1'>
                <button className='bg-button text-white text-xs'>Đăng ký</button>
                <button className='bg-button text-white text-xs'>Đăng nhập</button>
                <img src="/src/assets/Image/Icon-Header/icons8-message.png" alt="" width={25}/>
            </div>
            </div>
            <img src="/src/assets/Image/Slide/00.jpg" alt="" />
            <p className='h-[35px] w-30 bg-[#212529] m-2'></p>
            <div className="flex text-xs items-center justify-between mx-2 font-light">
                <p className="font-medium">Đăng nhập/Đăng ký</p>
                <div className="flex flex-col items-center font-light">
                    <img src="/src/assets/Image/Icon-Header/Vip.png" width={35} alt="" />
                    <p className="text-[#2485c3] text-[11px]">VIP</p>
                </div>
                <div className="flex flex-col items-center font-light">
                    <img src="/src/assets/Image/Icon-Header/phone.png" alt="" width={35}/>
                    <p className="text-[#2485c3] text-[11px]">Tải ứng dụng</p>
                </div>
                <div className="flex flex-col items-center font-light">
                    <img src="/src/assets/Image/Icon-Header/naptien.png" alt="" width={35}/>
                    <p className="text-[#2485c3] text-[11px]">Nạp tiền</p>
                </div>
                <div className="flex flex-col items-center font-light">
                    <img src="/src/assets/Image/Icon-Header/ruttien.png" alt="" width={35}/>
                    <p className="text-[#2485c3] text-[11px]">Rút tiền</p>
                </div>
            </div>
        </>
    )
}
export default Header
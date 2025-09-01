import React from 'react'

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[280px] h-[300px] lgl:w-[350px] lgl:h-[380px] z-10"
        src='https://i.postimg.cc/3rD3f2Ct/539614269-1257403539733227-2009438107937016232-n.jpg'
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[400px] lgl:h-[390px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner
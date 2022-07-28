import QrCode from './QrCode';

export default function Card() {
    return (
        <div className="rounded-[20px] bg-White p-[16px] w-[320px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.0476518)]">
            <QrCode />
            <div className="text-center">
                <h1 className="text-Dark-blue font-bold text-[22px] mt-[24px] mb-[16px] leading-[28px]">Improve your front-end skills by building projects</h1>
                <p className="text-[15px] text-[#7D889E] tracking-[0.19px] px-[16px] mb-[24px]">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    );
}
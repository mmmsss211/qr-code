import qrcode from '../assets/image-qr-code.png';

export default function QrCode() {
    return (
      <img className="rounded-[10px]" src={qrcode} alt="Qr-Code"/>
    );
  }
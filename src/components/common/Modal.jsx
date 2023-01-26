import { createPortal } from "react-dom";

const Modal = (props) => {
  const dropdown = (
    <div
      className="fixed z-40 top-0 bg-black bg-opacity-40 h-full w-full cursor-pointer"
      onClick={props.close}
    ></div>
  );
  const modal = (
    <div className="fixed z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-dark-light rounded-lg min-w-[18rem] xs:min-w-[28rem] sm:w-[36rem] md:w-[52rem] min-h-[16rem] p-8 text-white">
      <h2 className="font-bold text-lg sm:text-2xl mb-2">{props.title}</h2>
      <iframe
        width="100%"
        className="h-[12rem] sm:h-[24rem]"
        title={props.title}
        src={
          props.link || "https://www.youtube.com/embed/ma7rUS_vW9M?autoplay=1"
        }
        allow="web-share; autoplay"
        frameborder="0"
      ></iframe>
      <div className="flex justify-end mt-6">
        <button
          className="bg-blue-600 rounded-md font-semibold px-4 py-3 "
          onClick={props.close}
        >
          Close
        </button>
      </div>
    </div>
  );

  const dropdownCover = document.getElementById("dropdown");
  const modalCover = document.getElementById("modal");

  return (
    <>
      {createPortal(dropdown, dropdownCover)}
      {createPortal(modal, modalCover)}
    </>
  );
  //   return <div className="fixed z-50 bg-black bg-opacity-40 h-full"></div>;
};

export default Modal;

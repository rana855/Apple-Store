import { useGSAP } from "@gsap/react";
import { useState } from "react"
import gsap from "gsap";
import { ModalView } from "./ModalView";
import { yellowImg } from "../utils";
import { useRef } from "react";
import * as THREE from "three";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModal] = useState({
    title: "iphone 15 pro natural titanuim",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer Look
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className=" w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModalView />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;

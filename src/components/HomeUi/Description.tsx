import bestGearDesktop from "../../../public/assets/shared/desktop/image-best-gear.jpg";
import bestGearTablet from "../../../public/assets/shared/tablet/image-best-gear.jpg";
import bestGearMobile from "../../../public/assets/shared/mobile/image-best-gear.jpg";

export default function Description() {
  return (
    <div className="laptop:max-w-[86vw] laptop:mx-auto flex   mx-auto laptop:gap-[6rem] max-laptop:flex-col-reverse max-tablet:min-w-[42rem]">
      <div className="laptop:max-w-[35xvw] laptop:mt-40 max-laptop:w-[70vw] max-laptop:mx-auto max-laptop:text-center">
        <h2 className="text-4xl font-medium mb-10 leading-tight">
          BRINGING YOU THE <span className="text-[#d87d4a]">BEST</span> AUDIO
          GEAR
        </h2>
        <p className="text-[#bfbdbddd] text-base">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <picture>
        <source srcSet={bestGearDesktop} media="(min-width: 1024px)" />
        <source srcSet={bestGearTablet} media="(min-width: 768px)" />
        <img
          src={bestGearMobile}
          alt="Best Audio Gear"
          className="max-laptop:w-[70vw] rounded-lg laptop:min-w-[42vw] max-laptop:mx-auto max-laptop:mb-10 h-auto min-w-[32rem]"
        />
      </picture>
    </div>
  );
}

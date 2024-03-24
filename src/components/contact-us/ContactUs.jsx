import { useForm } from "react-hook-form";
import {
  ContactForm,
  ContactUsSection,
  ContactUsText,
  CrossSvg,
} from "./ContactUs.styles";
import sprite from "/sprite.svg";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();

  //   const submit = ({ discordUsername, walletAddress }) => {
  //     reset();
  //   };

  return (
    <ContactUsSection>
      <h2>Are you in?</h2>
      <CrossSvg>
        <use xlinkHref={`${sprite}#icon-cross`} />
      </CrossSvg>
      <ContactUsText>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </ContactUsText>
      <ContactForm action="">
        <div>
          <svg>
            <use xlinkHref={`${sprite}#icon-logo-discord`} />
          </svg>

          <input
            type="text"
            placeholder="@username"
            {...register("discordUsername", { required: true })}
          />
        </div>
        <div>
          <svg>
            <use xlinkHref={`${sprite}#icon-logo-metamask`} />
          </svg>

          <input
            type="text"
            placeholder="Wallet address"
            {...register("walletAddress", { required: true })}
          />
        </div>
        <button>Mint</button>
      </ContactForm>
    </ContactUsSection>
  );
};

export default ContactUs;

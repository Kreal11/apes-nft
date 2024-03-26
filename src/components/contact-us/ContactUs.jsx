import { useState } from "react";
import {
  ContactForm,
  ContactUsSection,
  ContactUsText,
  CrossSvg,
  ErrorMessage,
  Input,
  MintButton,
} from "./ContactUs.styles";
import sprite from "/sprite.svg";

const ContactUs = () => {
  const [discordUsername, setDiscordUsername] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [discordError, setDiscordError] = useState("");
  const [walletError, setWalletError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateUsername = (value) => {
    if (value.trim() === "") {
      setDiscordError("Wrong discord");
    } else if (/\s/.test(value)) {
      setDiscordError("Wrong discord");
    } else if (!/^[a-zA-Z0-9@]*$/.test(value)) {
      setDiscordError("Wrong discord");
    } else if (!/^@[^@]*$/.test(value)) {
      setDiscordError("Wrong discord");
    } else {
      setDiscordError("");
    }
  };

  const validateWalletAddress = (value) => {
    if (value.trim() === "") {
      setWalletError("Wrong address");
    } else if (/\s/.test(value)) {
      setWalletError("Wrong address");
    } else if (!/^[a-zA-Z0-9]*$/.test(value)) {
      setWalletError("Wrong address");
    } else {
      setWalletError("");
    }
  };

  const handleUsernameChange = (e) => {
    setDiscordUsername(e.target.value);
    validateUsername(e.target.value);
  };

  const handleWalletAddressChange = (e) => {
    setWalletAddress(e.target.value);
    validateWalletAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (discordUsername.trim() === "") {
      return setDiscordError("Wrong discord");
    }
    if (walletAddress.trim() === "") {
      return setWalletError("Wrong address");
    }

    setSuccess(true);
    setDiscordUsername("");
    setWalletAddress("");
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  const isSuccess = success;
  const hasError = discordError || walletError;

  let buttonText;
  if (isSuccess) {
    buttonText = "Minted";
  } else if (hasError) {
    buttonText = "Error";
  } else {
    buttonText = "Mint";
  }

  return (
    <ContactUsSection id="#mint">
      <h2>Are you in?</h2>
      <CrossSvg>
        <use xlinkHref={`${sprite}#icon-cross`} />
      </CrossSvg>
      <ContactUsText>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </ContactUsText>
      <ContactForm action="" onSubmit={handleSubmit}>
        <div>
          <svg>
            <use xlinkHref={`${sprite}#icon-logo-discord`} />
          </svg>

          <Input
            type="text"
            placeholder="@username"
            value={discordUsername}
            onChange={handleUsernameChange}
            $filled={discordUsername.trim() !== ""}
            $error={discordError}
          />
          <ErrorMessage $show={discordError}>{discordError}</ErrorMessage>
        </div>
        <div>
          <svg>
            <use xlinkHref={`${sprite}#icon-logo-metamask`} />
          </svg>

          <Input
            type="text"
            placeholder="Wallet address"
            value={walletAddress}
            onChange={handleWalletAddressChange}
            $filled={walletAddress.trim() !== ""}
            $error={walletError}
          />
          <ErrorMessage $show={walletError}>{walletError}</ErrorMessage>
        </div>
        <MintButton $success={success} $error={discordError || walletError}>
          {buttonText}
        </MintButton>
      </ContactForm>
    </ContactUsSection>
  );
};

export default ContactUs;

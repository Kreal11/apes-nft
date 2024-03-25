import { useState } from "react";
import {
  FAQHeader,
  FAQImg,
  FAQSection,
  QuestionDescr,
  QuestionHeaderWrapper,
  QuestionNumber,
  QuestionWrapper,
} from "./FAQ.styled";
import apeFAQ_1 from "../../assets/images/faq/apeFAQ_1.png";
import apeFAQ_2 from "../../assets/images/faq/apeFAQ_2.png";
import apeFAQ_3 from "../../assets/images/faq/apeFAQ_3.png";
import apeFAQ_4 from "../../assets/images/faq/apeFAQ_4.png";
import { useMediaQuery } from "react-responsive";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState([true, false, false, false]);
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });

  const toggleAnswer = (index) => {
    const newIsOpen = isOpen.map((value, i) => (i === index ? !value : false));
    setTimeout(() => {
      setIsOpen(newIsOpen);
    }, 310);
  };

  return (
    <FAQSection id="#faq">
      <FAQHeader>FAQ</FAQHeader>
      <QuestionWrapper $isOpen={isOpen[0]}>
        {isTablet && <FAQImg src={apeFAQ_1} alt="Ape" $isOpen={isOpen[0]} />}
        <QuestionHeaderWrapper
          onClick={() => toggleAnswer(0)}
          $isOpen={isOpen[0]}
        >
          <QuestionNumber>[ 1 ]</QuestionNumber>
          <h3>WHAT IS AN NFT COLLECTION?</h3>
        </QuestionHeaderWrapper>
        <QuestionDescr $isOpen={isOpen[0]}>
          An NFT collection is a group of unique digital assets, each
          represented by a non-fungible token, typically created around a
          specific theme or style.
        </QuestionDescr>
      </QuestionWrapper>
      <QuestionWrapper $isOpen={isOpen[1]}>
        {isTablet && <FAQImg src={apeFAQ_2} alt="Ape" $isOpen={isOpen[1]} />}
        <QuestionHeaderWrapper
          onClick={() => toggleAnswer(1)}
          $isOpen={isOpen[1]}
        >
          <QuestionNumber>[ 2 ]</QuestionNumber>
          <h3>HOW DO I PURCHASE NFTS FROM A COLLECTION?</h3>
        </QuestionHeaderWrapper>
        <QuestionDescr $isOpen={isOpen[1]}>
          To purchase nfts from a collection, you typically need to use
          cryptocurrency on a blockchain-based marketplace.
        </QuestionDescr>
      </QuestionWrapper>
      <QuestionWrapper $isOpen={isOpen[2]}>
        {isTablet && <FAQImg src={apeFAQ_3} alt="Ape" $isOpen={isOpen[2]} />}
        <QuestionHeaderWrapper
          onClick={() => toggleAnswer(2)}
          $isOpen={isOpen[2]}
        >
          <QuestionNumber>[ 3 ]</QuestionNumber>
          <h3>CAN I SELL OR TRADE NFTS FROM A COLLECTION?</h3>
        </QuestionHeaderWrapper>
        <QuestionDescr $isOpen={isOpen[2]}>
          Yes, you can sell or trade NFTs from a collection like you would other
          digital assets.
        </QuestionDescr>
      </QuestionWrapper>
      <QuestionWrapper $isOpen={isOpen[3]}>
        {isTablet && <FAQImg src={apeFAQ_4} alt="Ape" $isOpen={isOpen[3]} />}
        <QuestionHeaderWrapper
          onClick={() => toggleAnswer(3)}
          $isOpen={isOpen[3]}
        >
          <QuestionNumber>[ 4 ]</QuestionNumber>
          {isMobile && (
            <h3>
              WHAT RIGHTS DO I HAVE AS AN OWNER <br />
              OF AN NFT?
            </h3>
          )}
          {isTablet && <h3>WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?</h3>}
        </QuestionHeaderWrapper>
        <QuestionDescr $isOpen={isOpen[3]}>
          As an NFT owner, you can own, transfer, potentially access exclusive
          content, resell, but don`t automatically get copyright or intellectual
          property rights.
        </QuestionDescr>
      </QuestionWrapper>
    </FAQSection>
  );
};

export default FAQ;

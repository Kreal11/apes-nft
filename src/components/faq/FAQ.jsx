import { useState } from "react";
import {
  FAQHeader,
  FAQSection,
  QuestionDescr,
  QuestionHeaderWrapper,
  QuestionNumber,
  QuestionWrapper,
} from "./FAQ.styled";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState([true, false, false, false]);

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
        <QuestionHeaderWrapper
          onClick={() => toggleAnswer(3)}
          $isOpen={isOpen[3]}
        >
          <QuestionNumber>[ 4 ]</QuestionNumber>
          <h3>
            WHAT RIGHTS DO I HAVE AS AN OWNER <br />
            OF AN NFT?
          </h3>
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

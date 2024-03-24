import { useState } from "react";
import {
  FAQHeader,
  FAQSection,
  QuestionDescr,
  QuestionHeaderWrapper,
  QuestionNumber,
  QuestionWrapper,
} from "./FAQ.styled";
import { CSSTransition } from "react-transition-group";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState([true, false, false, false]);

  const toggleAnswer = (index) => {
    const newIsOpen = isOpen.map((value, i) => (i === index ? !value : false));
    setIsOpen(newIsOpen);
  };

  return (
    <FAQSection>
      <FAQHeader>FAQ</FAQHeader>
      <QuestionWrapper>
        <QuestionHeaderWrapper onClick={() => toggleAnswer(0)}>
          <QuestionNumber>[ 1 ]</QuestionNumber>
          <h3>WHAT IS AN NFT COLLECTION?</h3>
        </QuestionHeaderWrapper>
        <CSSTransition
          in={isOpen[0]}
          timeout={300}
          classNames="question"
          unmountOnExit
        >
          <QuestionDescr>
            An NFT collection is a group of unique digital assets, each
            represented by a non-fungible token, typically created around a
            specific theme or style.
          </QuestionDescr>
        </CSSTransition>
      </QuestionWrapper>
      <QuestionWrapper>
        <QuestionHeaderWrapper onClick={() => toggleAnswer(1)}>
          <QuestionNumber>[ 2 ]</QuestionNumber>
          <h3>HOW DO I PURCHASE NFTS FROM A COLLECTION?</h3>
        </QuestionHeaderWrapper>
        <CSSTransition
          in={isOpen[1]}
          timeout={300}
          classNames="question"
          unmountOnExit
        >
          <QuestionDescr>
            To purchase nfts from a collection, you typically need to use
            cryptocurrency on a blockchain-based marketplace.
          </QuestionDescr>
        </CSSTransition>
      </QuestionWrapper>
      <QuestionWrapper>
        <QuestionHeaderWrapper onClick={() => toggleAnswer(2)}>
          <QuestionNumber>[ 3 ]</QuestionNumber>
          <h3>CAN I SELL OR TRADE NFTS FROM A COLLECTION?</h3>
        </QuestionHeaderWrapper>
        <CSSTransition
          in={isOpen[2]}
          timeout={300}
          classNames="question"
          unmountOnExit
        >
          <QuestionDescr>
            Yes, you can sell or trade NFTs from a collection like you would
            other digital assets.
          </QuestionDescr>
        </CSSTransition>
      </QuestionWrapper>
      <QuestionWrapper>
        <QuestionHeaderWrapper onClick={() => toggleAnswer(3)}>
          <QuestionNumber>[ 4 ]</QuestionNumber>
          <h3>
            WHAT RIGHTS DO I HAVE AS AN OWNER <br />
            OF AN NFT?
          </h3>
        </QuestionHeaderWrapper>
        <CSSTransition
          in={isOpen[3]}
          timeout={300}
          classNames="question"
          unmountOnExit
        >
          <QuestionDescr>
            As an NFT owner, you can own, transfer, potentially access exclusive
            content, resell, but don`t automatically get copyright or
            intellectual property rights.
          </QuestionDescr>
        </CSSTransition>
      </QuestionWrapper>
    </FAQSection>
  );
};

export default FAQ;

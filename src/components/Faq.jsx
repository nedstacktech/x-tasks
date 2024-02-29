import React from "react";
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  OrderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const faqs = [
  {
    ques: "What is the Bridge Token Gamified Engagement Airdrop?",
    ans: "Earn Bridge Points through interaction with @BridgeToken on Twitter/X. Bridge Points, gained by engaging with Bridge token tweets (likes, replies, quote tweets, etc.) and distributing your own content, may offer future opportunities or benefits following the launch of Bridge Chain's mainnet. The nature and extent of these opportunities, as well as the method of point accumulation, are subject to further details and conditions. ",
  },
  {
    ques: "What are the official airdrop campaign links?",
    ans: ["https://bridgetoken22.netlify.app/"],
  },
  {
    ques: "Are there any special terms or conditions for participation?",
    ans: [
      "Twitter/X account must at least 50+ followers by the end of the campaign before the data snapshot.",
      "Botting/malicious activities, sybil attacks will lead to disqualification and loss of Bridge Points, at Bridge's discretion.",
      "KYC will be mandatory for all participants. \n a. U.S. persons with Bridge Points cannot pass KYC and are ineligible for their use or future redemptions.",
      "Participants from the U.S., OFAC-sanctioned countries (Cuba, Iran, North Korea, Syria, Crimea, certain Ukrainian regions), and other sanctioned countries are ineligible.",
      "Bridge Chain reserves the right to end the campaign at any point due to botting or other forms of mass widespread abuse.",
    ],
  },
  {
    ques: "What are Bridge Points?",
    ans: "Bridge Points are a measurement of participant involvement in the Gamified Engagement Airdrop. These points may potentially have future applications or benefits after the launch of Bridge Chain's mainnet, subject to further conditions and qualifications.",
  },
  {
    ques: "When can rewards be claimed?",
    ans: "Reward claims will be available at a later date, after public launch.",
  },
];

function Faq() {
  return (
    <Box maxW="70rem" px="6" mx="auto" my="10">
      <Heading
        as="h3"
        mb="8"
        fontFamily={"'DM Sans', sans-serif"}
        fontSize={"1.8rem"}
      >
        Frequently Asked Questions
      </Heading>
      <Accordion borderX={"1px solid #ddd"} rounded="xl" overflow={"hidden"}>
        {faqs.map(({ ans, ques }, index) => (
          <AccordionItem key={index}>
            {({ isExpanded }) => (
              <>
                <AccordionButton fontWeight={"bold"} fontSize={"1.2rem"} py="4">
                  <Box as="span" flex="1" textAlign="left">
                    {ques}
                  </Box>
                  {isExpanded ? <FaMinus /> : <FaPlus />}
                </AccordionButton>
                <AccordionPanel px="8">
                  {Array.isArray(ans) ? (
                    <OrderedList>
                      {ans.map((item, index2) => (
                        <ListItem key={index2}>{item}</ListItem>
                      ))}
                    </OrderedList>
                  ) : (
                    <Text>{ans}</Text>
                  )}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

export default Faq;

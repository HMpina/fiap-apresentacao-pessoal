import React from "react";
import styled from "styled-components";
import { Box } from "reflexbox";
import Skeleton from 'react-loading-skeleton';
import { Card } from "../../common-components/Card/Card";
import {
  Colors,
  Spaces,
} from "../../shared/DesignTokens";
import { TextTwo } from "../../common-components/TextTwo/TextTwo";

const InformationGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 70px;
  gap: ${Spaces.TWO};
`;

export function InfoPessoalLoader() {
  return (
    <Card>
      <InformationGrid p={Spaces.TWO} mb={Spaces.ONE_HALF}>
        <Box>
          <TextTwo as="div" color={Colors.GRAY_200}>
            <Skeleton />
          </TextTwo>
          <TextTwo as="div" color={Colors.GRAY_200}>
            <Skeleton />
          </TextTwo>
          <TextTwo as="div" color={Colors.GRAY_200}>
            <Skeleton />
          </TextTwo>
          <TextTwo as="div" color={Colors.GRAY_200}>
            <Skeleton />
          </TextTwo>
        </Box>
      </InformationGrid>
    </Card>
  );
}

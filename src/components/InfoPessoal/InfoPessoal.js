import React from "react";
import styled from "styled-components";
import { Box } from "reflexbox";
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

export function InfoPessoal({ cidade, estado, logradouro, complemento }) {
  return (
    <Card>
      <InformationGrid p={Spaces.TWO} mb={Spaces.ONE_HALF}>
        <Box>
          <TextTwo as="div" color={Colors.NEUTRAL_WHITE}>
            <strong>Endereço:</strong> {logradouro}
          </TextTwo>
          <TextTwo as="div" color={Colors.NEUTRAL_WHITE}>
            <strong>Complemento:</strong> {complemento}
          </TextTwo>
          <TextTwo as="div" color={Colors.NEUTRAL_WHITE}>
            <strong>Cidade:</strong> {cidade}
          </TextTwo>
          <TextTwo as="div" color={Colors.NEUTRAL_WHITE}>
            <strong>Estado:</strong> {estado}
          </TextTwo>
        </Box>
      </InformationGrid>
    </Card>
  );
}

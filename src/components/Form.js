import React, { Component } from "react";
import {
  Select,
  Input,
  RadioGroup,
  Radio,
  Stack,
  Box,
  SimpleGrid,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Badge,
  Checkbox,
  Button,
  StatLabel,
  StatHelpText,
  StatArrow,
  StatGroup,
  StatNumber,
  Stat,
} from "@chakra-ui/react";

class Form extends Component {
  render() {
    return (
      <>
        <SimpleGrid columns={2} spacing={10}>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <Input placeholder="in poute pour écrire des choses" size="sm" />
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <RadioGroup>
              <Stack direction="row">
                <Radio value="1">Ici</Radio>
                <Radio value="2">Là</Radio>
                <Radio value="3">Ou là ?</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <Select placeholder="Selectionnez le meilleur choix">
              <option value="option1">L'option 1 (la meilleur)</option>
              <option value="option2">L'option 2 (la pire)</option>
              <option value="option3">L'option 3 (on sais pas)</option>
            </Select>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <Stack direction="row">
              <Badge variant="outline" colorScheme="green">
                outline
              </Badge>
              <Badge variant="solid" colorScheme="green">
                solid
              </Badge>
              <Badge variant="subtle" colorScheme="green">
                subtle
              </Badge>
            </Stack>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <Slider aria-label="slider-ex-1" defaultValue={30}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <Stack spacing={10} direction="row">
              <Checkbox colorScheme="red" defaultIsChecked>
                Checkbox de l'enfer
              </Checkbox>
              <Checkbox colorScheme="green" defaultIsChecked>
                Checkbox verte
              </Checkbox>
            </Stack>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <Stack spacing={1} direction="row" align="center">
              <Button colorScheme="teal" size="xs">
                tipiti
              </Button>
              <Button colorScheme="teal" size="sm">
                Piti
              </Button>
              <Button colorScheme="teal" size="md">
                Moyen
              </Button>
              <Button colorScheme="teal" size="lg">
                GROS
              </Button>
            </Stack>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <StatGroup>
              <Stat>
                <StatLabel>Nb de croissants</StatLabel>
                <StatNumber>345,670</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  23.36%
                </StatHelpText>
              </Stat>

              <Stat>
                <StatLabel>Nb de table</StatLabel>
                <StatNumber>45</StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText>
              </Stat>
            </StatGroup>
          </Box>
        </SimpleGrid>
      </>
    );
  }
}

export default Form;

import { Text } from "react-native";
import React from "react";
import PropTypes from "prop-types";

export default function Saludar(props) {
  const { firstname, lastname } = props;
  return (
    <Text>
      Hola {firstname} {lastname}
    </Text>
  );
}

Saludar.defaultProps = {
  firstname: "Nohora Isbael",
  lastname: "Rincón Rincón",
};

// Validación de propiedades: propTypes
Saludar.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  //   Si no coloco isRequired, quiere decir que puede ser opcional
};

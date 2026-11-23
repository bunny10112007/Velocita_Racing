import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

// import Logo from "../../assets/Logo/vr-new-logo.png";

// Font.register({
//   family: "Oswald",
//   src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
// });

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },

  end: {
    marginTop: 6,
    marginLeft: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },

  endline: {
    marginTop: 20,
    marginLeft: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },

  endadd: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },

  endname: {
    marginLeft: 12,
    marginTop: 8,
    marginBottom: 0,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    // marginHorizontal: 100,
  },
  signature: {
    marginTop: 20,
    marginLeft: 12,
    height: 20,
    width: 80,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const Letter = (props) => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        {/* <Image style={styles.image} src={Logo} /> */}
        <Text style={styles.text}>Dear Patron,</Text>
        <Text style={styles.text}>
          Thank you for your great generosity. We, at Velocita Racing, greatly
          appretiate your contribution. Your contribution has brought us one
          step closer to fulfilling ourvison of developing our Formula Student
          car.
        </Text>
        <Text style={styles.text}>
          Your support is invaluable to us, thank you again!
        </Text>
        <Text style={styles.endline}>With deepest gratitude,</Text>
        {/* <Image style={styles.signature} src={Logo} /> */}
        <Text style={styles.endname}>Soumyadeep</Text>
        <Text style={styles.end}>Operations Manager</Text>
        <Text style={styles.endadd}>Team Velocita Racing</Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default Letter;

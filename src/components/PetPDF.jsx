import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import CardPet from'./CardPet';
// import logo from "../../public/logo-pet.PNG";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,

  },
  logo: {
    width: 60,
    height: 60,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: 'burlywood',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    margin: 2,
  },
  bold: {
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    fontSize: 10,
  },
});

const PetPDF = ({ pet }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          {/* <Image src={logo}/> */}
          <Text style={styles.headerText}>Nombre de la Veterinaria</Text>
          <Text style={styles.headerText}>"Cuidamos a tus mascotas como a nuestra familia"</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Owner Information</Text>
          <Text style={styles.text}><Text style={styles.bold} >Owner Name:  </Text> {pet.owner_name} {pet.owner_lastName}</Text>
          <Text style={styles.text}><Text style={styles.bold} >Address:  </Text>{pet.address}</Text>
          <Text style={styles.text}><Text style={styles.bold} >Phone:  </Text>{pet.phone}</Text>
          <Text style={styles.text}><Text style={styles.bold} >Email:  </Text>{pet.email}</Text>
          <Text style={styles.text}><Text style={styles.bold} >Date:  </Text>{pet.release_data}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Pet Information</Text>
          <Text style={styles.text}><Text style={styles.bold} >Name:  </Text>{pet.name}</Text>
          <Text style={styles.text}><Text style={styles.bold} >Specie:  </Text>{pet.species}</Text>
          <Text style={styles.text}><Text style={styles.bold} >Breed:  </Text>{pet.breed}</Text>
          <Text style={styles.text}><Text style={styles.bold} >Age:  </Text>{pet.age}</Text>
          <Text style={styles.text}><Text style={styles.bold} >Weight:  </Text>{pet.weigth}</Text>
          <Text style={styles.text}><Text style={styles.bold} >Vaccinated:  </Text>{pet.vaccinated}</Text>
          <Text style={styles.text}><Text style={styles.bold} >Anamnesicos:  </Text>{pet.anamnesicos}</Text>
        </View>
        <View style={styles.footer}>
          <Text>© 2024 Nombre de la Veterinaria - Todos los derechos reservados</Text>
        </View>
      </Page>
    </Document>
  )
}

export default PetPDF;
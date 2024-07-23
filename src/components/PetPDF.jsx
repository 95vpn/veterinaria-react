import React from 'react';
import { Document, Page, Text, View, StyleSheet} from '@react-pdf/renderer';
import CardPet from './CardPet';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      padding: 30,
    },
    section: {
      
      
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
    },
    text: {
      fontSize: 12,
      margin: 2,
    },
    bold: {
        fontWeight: 'bold',
      }
  });

const PetPDF = ({ pet }) => {
    return (
        <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Owner Information</Text>
            <Text style={styles.text}><Text style={styles.bold} >Owner Name: </Text> {pet.owner_name} {pet.owner_lastName}</Text>
            <Text style={styles.text}><Text style={styles.bold} >Address: </Text>{pet.address}</Text>
            <Text style={styles.text}><Text style={styles.bold} >Phone: </Text>{pet.phone}</Text>
            <Text style={styles.text}><Text style={styles.bold} >Email: </Text>{pet.email}</Text>
            <Text style={styles.text}><Text style={styles.bold} >Date: </Text>{pet.release_data}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Pet Information</Text>
            <Text style={styles.text}><Text style={styles.bold} >Name:</Text>{pet.name}</Text>
            <Text style={styles.text}><Text style={styles.bold} >Species:</Text>{pet.species}</Text>
            <Text style={styles.text}><Text style={styles.bold} >Breed:</Text>{pet.breed}</Text>
            <Text style={styles.text}><Text style={styles.bold} >Age: </Text>{pet.age}</Text>
            <Text style={styles.text}><Text style={styles.bold} >Weight:</Text>{pet.weigth}</Text>
            <Text style={styles.text}><Text style={styles.bold} >Vaccinated: </Text>{pet.vaccinated}</Text>
            <Text style={styles.text}><Text style={styles.bold} >Anamnesicos:</Text>{pet.anamnesicos}</Text>
            <Text style={styles.bold} >Anamnesicos:</Text>
          </View>
        </Page>
      </Document>
    )
}

export default PetPDF;